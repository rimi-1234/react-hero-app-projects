import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useApp from '../../hooks/useApp';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import AppCard from '../../Components/AppCard/AppCard';
import { Link } from 'react-router';



const Home = () => {

    const { apps, loading } = useApp();
      const appsData = apps.slice(0, 8)
    
    

   





    return (
        
        <div className='bg-base-200'>
            <Banner></Banner>
            <div className='text-center mt-10  mb-4'>
                 <h1 className="text-5xl font-bold">Trending Apps </h1 >
                          
                        <p className="py-3 text-[11px] text-gray-500">
                            Explore All Trending Apps on the Market developed by us
                        </p>
            </div>
            {loading ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-4 gap-4   mx-10 pb-10'>
                    {
                       
                        appsData.map((app,index)=><AppCard key={index} app={app} ></AppCard>)
                    }
                </div>
            )}

            <div className='flex  justify-center pb-10'>

            <Link to="/apps">    <button className="btn mr-3 bg-gradient-to-r from-[#632EE3] to-[#9F62F2] text-white">Show All</button></Link>
            </div>
            
        </div>
    );
};

export default Home;