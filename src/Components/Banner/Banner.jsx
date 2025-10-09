import React from 'react';

import googlePlay from '../../assets/google-play.png'
import appStore from '../../assets/app-store.png'
import hero from '../../assets/hero.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <>
            <div className="hero bg-base-200 min-h-[300px]">
                <div className="hero-content text-center ">
                    <div className="max-w-lg">
                        <h1 className="text-5xl font-bold">We Build <br />
                            <span className='font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent'>Productive</span> Apps</h1>
                        <p className="py-3 text-[11px] text-gray-500">
                            At <span>HERO.IO</span>, we craft innovative apps that make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.
                        </p>
                        <Link to="https://play.google.com/store/games?hl=en">
                            <button className="btn "><img className='w-5 h-5' src={googlePlay} alt="" />Google Play</button>
                        </Link>
                        <Link to='https://www.apple.com/app-store/'>
                            <button className="btn ml-4"><img className='w-5 h-5' src={appStore} alt=""  /> App Store</button>
                        </Link>
                        <img className='mt-7' src={hero} alt="" />
                    </div>
                </div>
            </div>
            <div className='hero bg-gradient-to-r from-[#632EE3] to-[#9F62F2] min-h-[200px] relative -top-6 '>
                <div className="hero-content    ">
                    <div className="max-w-[1400px] text-center">
                        <p className='text-white text-2xl text-center'>Trusted by Millions, Built for You</p>
                        <div className='grid grid-cols-3 gap-6 '>
                            <div>
                                <h1 className='text-[11px] text-gray-500'>Total Downloads</h1>
                                 <p className='text-white text-3xl font-bold'>29.6M</p>
                                 <h1 className='text-[11px] text-gray-500'>21% more than last month</h1>
                            </div>
                            <div>
                                <h1 className='text-[11px] text-gray-500'>Total Downloads</h1>
                                 <p className='text-white text-3xl font-bold'>29.6M</p>
                                 <h1 className='text-[11px] text-gray-500'>21% more than last month</h1>
                            </div>
                            <div>
                                <h1 className='text-[11px] text-gray-500'>Total Downloads</h1>
                                 <p className='text-white text-3xl font-bold'>29.6M</p>
                                 <h1 className='text-[11px] text-gray-500'>21% more than last month</h1>
                            </div>

                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
};

export default Banner;