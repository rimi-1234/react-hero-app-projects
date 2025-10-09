import React, { useState } from 'react';
import { getStoredApp, removeFromAppList } from '../../Utility/addToDb';
import { ArrowDownToLine, Star } from 'lucide-react';

const Installation = () => {
    const [applist, setApplist] = useState(() => getStoredApp())
    const [sortOrder, setSortOrder] = useState('none')

   

    const sortedItem = (() => {
        if (sortOrder === 'size-asc') {
            return [...applist].sort((a, b) => a.size - b.size)
        } else if (sortOrder === 'size-desc') {
            return [...applist].sort((a, b) => b.size - a.size)
        } else {
            return applist
        }
    })()
    const handleRemove = id => {
        // remove from localstorage
        removeFromAppList(id)
        // for ui instant update
        setApplist(prev => prev.filter(p => p.id !== id))
    }

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
                                    ({sortedItem.length}) Apps Found.
                                </span>
                            </h1>
                        </div>
                        
                        <div className='' >
                            <label className='form-control w-full max-w-xs '>
                                <select className='select select-bordered bg-base-200' value={sortOrder}
                                    onChange={e => setSortOrder(e.target.value)}>
                                    <option value='none'>Sort by Size</option>
                                    <option value='size-asc'>Low → High</option>
                                    <option value='size-desc'>High → Low</option>
                                </select>

                            </label>
                        </div>

                    </div>
                    <div className='space-y-4 mx-10 mb-20'>
                        {sortedItem.length === 0 ? (
                <div className='flex justify-center items-center h-[calc(100vh-400px)]'>
                    <h1 className='text-5xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>NO data found</h1>
                </div>):(sortedItem.map(p => (
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
                                        onClick={() => handleRemove(p.id)}

                                        className="mt-5 mr-3 bg-[#00D390] text-white px-4 py-2 rounded-lg"
                                    >
                                        Uninstall
                                    </button>
                                </div>
                            </div>
                        )))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Installation;