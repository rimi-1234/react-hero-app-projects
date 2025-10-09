import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import useApp from '../../hooks/useApp';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { ArrowDownToLine, Star, ThumbsUp } from 'lucide-react';
import "./SingleAppdetail.css"
import { ToastContainer, toast } from 'react-toastify';
import errorImg from '../../assets/App-Error.png'
import {
    ComposedChart,
    Line,
    Area,
    Bar,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    ResponsiveContainer,
} from 'recharts';
import { addtoAppList } from '../../Utility/addToDb';


const SingleAppdetail = () => {


    const { id } = useParams();
    let navigate = useNavigate();
    const { apps, loading } = useApp();
    const [isActiveApplist, setIsActiveApplist] = useState(false);
    const [isInstall, setIsInstall] = useState(false);


    const [sortRatings, setRatings] = useState([]);
    const appsData = apps.find(p => p.id === Number(id))

    const { image, title, downloads, ratingAvg, companyName, reviews, size, ratings = [], description } = appsData || {};

    // Initialize state correctly with this app's ratings
useEffect(() => {
  const appState = localStorage.getItem(`applist-${id}`);
  setIsInstall(appState === 'true'); // convert string to boolean if stored that way
}, [id]);

useEffect(() => {
  // logs after state actually changes
}, [isInstall]);
    useEffect(() => {
        if (ratings.length > 0) {
            setRatings(ratings);
        }
    }, [ratings]);

    // Sort ratings descending
    const sortedRatings = [...sortRatings].sort((a, b) => {
        const starA = parseInt(a.name);
        const starB = parseInt(b.name);
        return starB - starA;
    });


    const handleInstall = (appsData) => {
        console.log(isActiveApplist);
        
        if(!isInstall){
            toast("Success Installed");
            setIsInstall(true);
            setIsActiveApplist(true)
        }
        localStorage.setItem(`applist-${id}`, true);
        localStorage.setItem(`isInstall-${id}`, true);

        addtoAppList(appsData,setIsInstall);


    }

    if (loading) return <LoadingSpinner></LoadingSpinner>;


     if (!appsData) {
    return (
     <>
      <div className="flex flex-col items-center justify-center h-screen text-center">
                <img
                    src={errorImg}  // your error image in `public/` folder
                    alt="Error"
                    className="w-96 h-96 mb-6"
                />
                <h2 className="text-5xl font-bold  mb-2">Oops, page not found!</h2>
                <p className="text-gray-500 text-xl py-2">The page you are looking for is not available.</p>
                <button onClick={() => navigate(-1)} className="btn mr-3 mt-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white"><span></span>Go Back!</button>
            </div>
     </>
    );
  }



    return (
        <>
            <div className="  items-start my-4 mt-16  mx-20">
                <div className=" flex  bg-base-200   gap-12 items-start flex-col lg:flex-row-reverse">
                    <div className='flex-[75%] h-full'>

                        <div className="text-center lg:text-left">
                            <h1 className="text-3xl font-bold">{title}</h1>
                            <p className="py-4 ">
                                <span className="font-semibold">Book by:</span> <span className=' bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'> {companyName}</span>
                            </p>
                            <div className='border-t-1 text-gray-200 border-dashed my-3 '></div>

                            <div className='grid grid-cols-3 pt-3 w-[400px]  gap-3 '>
                                <div>
                                    <ArrowDownToLine className='text-[#00D390]' />
                                    <h1 className='text-[11px] text-gray-500 my-2'>Downloads</h1>
                                    <h1 className='text-2xl font-extrabold'>{downloads}M</h1>
                                </div>
                                <div>
                                    <Star stroke="#FF8811" fill="#FF8811" />
                                    <h1 className='text-[11px] text-gray-500 my-2'>Average Ratings</h1>

                                    <h1 className='text-2xl font-extrabold'>{ratingAvg}</h1>
                                </div>
                                <div>
                                    <div className="relative w-8 h-8 -top-2 ">
                                        <div className='p-4 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] px-6 rounded-md'>

                                        </div>
                                        <ThumbsUp stroke="#fff" fill="#fff" className="absolute top-0 left-2 w-7 h-7" />
                                        <Star stroke="#fff" fill="#632EE3" className="absolute -top-3 left-8 w-8 h-5" />
                                    </div>
                                    <h1 className='text-[11px] text-gray-500  mb-2'>Total Reviews</h1>

                                    <h1 className='text-2xl font-extrabold'>{reviews}K</h1>
                                </div>

                            </div>


                            <button
                                onClick={() => handleInstall(appsData)}
                                className="mt-5 mr-3 bg-[#00D390] text-white px-4 py-2 rounded-lg"
                            >
                                {isInstall ? "Installed" : `Install Now (${size} MB)`}
                            </button>

                            <ToastContainer />







                        </div>

                    </div>
                    <div className=" bg-base-100 w-full max-w-lg flex-[25%]  flex justify-center ">
                        <div className=" ">
                            <figure className='p-4  w-[280px] h-[250px] mx-auto bg-white mt-4'>
                                <img className=' h-full object-cover '
                                    src={image}
                                    alt="Shoes" />
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div className='border-t-1 text-gray-300 border-dashed my-5 mx-20 '></div>

            <h1 className='mx-18 my-2 font-bold'>Rating</h1>
            <div style={{ width: '100%', height: '400px', minHeight: '300px' }}>
                <ResponsiveContainer width="100%" height="100%">
                    <ComposedChart
                        layout="vertical"
                        data={sortedRatings}
                        margin={{ top: 20, right: 40, bottom: 20, left: 60 }} // left margin added
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis type="number" /> {/* must be number */}
                        <YAxis dataKey="name" type="category" scale="band" />
                        <Tooltip />
                        <Legend />
                        <Bar dataKey="count" barSize={20} fill="#FF8811" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>
            <div className='border-t-1 text-gray-300 border-dashed my-5 mx-20 '></div>
            <h1 className='mx-18 my-2 font-bold'>Description</h1>
            <p className='mx-18 mb-10 text-gray-500'>{description}</p>
        </>
    );
};

export default SingleAppdetail;