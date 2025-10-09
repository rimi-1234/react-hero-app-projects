import React, { useState } from 'react';
import { getStoredApp } from '../../Utility/addToDb';
import { ArrowDownToLine, Star } from 'lucide-react';

const Installation = () => {
    const [wishlist, setWishlist] = useState(() => getStoredApp())
    console.log(wishlist);
    //    "title": "Slack: Team Messaging & Collaboration",
    //     "companyName": "Slack Technologies",
    //     "id": 19,
    //     "description": "Slack is a business communication platform.\nSupports messaging in channels.\nDirect messaging for team members.\nFile sharing and storage.\nWorkflow automation through apps and bots.\nIntegration with third-party tools.\nVideo and voice calls within channels.\nCustomizable notifications.\nThreaded conversations for organization.\nSearch functionality to find messages and files.\nDark mode available.\nAnalytics for team communication.\nApp available on multiple platforms.\nSecurity and encryption supported.\nEmoji reactions and custom emojis.\nPinned messages for important info.\nBookmarking and saved items.\nGuest access for external collaborators.\nScheduled reminders for tasks.\nRegular updates improve usability and security.",
    //     "size": 200,
    //     "reviews": "500K",
    //     "ratingAvg": 4.5,
    //     "downloads": "500M",
    return (
        <div className='mx-12'>
            <div className='text-center mt-10  mb-4'>
                <h1 className="text-5xl font-bold">Your Installed Apps</h1 >

                <p className="py-3 text-[11px] text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div>
                    <div className='flex justify-between py-5 items-center mx-10'>
                        <div>

                            <h1 className='text-3xl font-semibold'>
                                All Apps{' '}
                                <span className='text-sm text-gray-500'>
                                    ({wishlist.length}) Apps Found.
                                </span>
                            </h1>
                        </div>
                        <div className='' >
                            <label className='form-control w-full max-w-xs '>
                                <select className='select select-bordered bg-base-200'>
                                    <option value='none'>Sort by price</option>
                                    <option value='price-asc'>Low → High</option>
                                    <option value='price-desc'>High → Low</option>
                                </select>

                            </label>
                        </div>

                    </div>
                    <div className='space-y-4 mx-10 mb-20'>
                        {wishlist.map(p => (
                            <div key={p.id} className='card border-none card-side bg-base-100 shadow border p-4'>
                                <div className='flex gap-4'>

                                    <figure className='p-4 bg-base-200'>
                                        <img
                                            className='w-10 h-10 object-cover'
                                            src={p.image}
                                            alt={p.name}
                                        />
                                    </figure>
                                    <div>

                                        <h3 className='font-bold'>{p.title}</h3>
                                        <div className='flex gap-4 py-3 items-center '>
                                            <p className=' text-[#00D390]  flex gap-1 '>  <ArrowDownToLine />{p.downloads}</p>
                                            <p className='text-[#FF8811]  flex gap-1'>
                                                <Star stroke="#FF8811" fill="#FF8811" /> {p.ratingAvg}
                                            </p>
                                            <h1 className=' text-gray-500  '>{p.size} MB</h1>

                                        </div>

                                    </div>
                                </div>
                                <div className='card-body'>
                                    
                                </div>
                                <div className=' pr-4 flex items-center gap-3'>
                                
                                    <button

                                        className="mt-5 mr-3 bg-[#00D390] text-white px-4 py-2 rounded-lg"
                                    >
                                           Uninstall
                                    </button>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;