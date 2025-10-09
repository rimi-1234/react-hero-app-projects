import React from 'react';
import { ArrowDownToLine} from 'lucide-react';
import { Star } from 'lucide-react';
import { Link } from 'react-router';
const AppCard = ({ app }) => {
    const { image, title, downloads, ratingAvg,id } = app;


    



    return (
          <Link to={`/apps/${id}`}>

            <div className="card bg-base-100  p-4   shadow-sm">
                <figure className='p-4  rounded-lg  mx-auto bg-gray-100 '>
                    <img className=' h-[300px]  p-4  object-cover'
                        src={image}
                        alt="Shoes" />
                </figure>
                <h1 className='py-4  text-gray-600 font-bold'>{title}</h1>
                <div className='flex justify-between '>
                    <p className='p-2 text-[#00D390] rounded-sm bg-[#F1F5E8] flex gap-1 '>  <ArrowDownToLine />{downloads}M</p>
                    <p className='p-2 text-[#FF8811] bg-[#FFF0E1] flex gap-1'>
                        <Star stroke="#FF8811" fill="#FF8811" /> {ratingAvg}
                    </p>

                </div>
            </div>
        </Link>
  

    );
};

export default AppCard;