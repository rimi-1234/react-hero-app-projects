import React, { useEffect, useState } from 'react';
import useApp from '../../hooks/useApp';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import AppCard from '../../Components/AppCard/AppCard';

import { Search } from 'lucide-react';
const Apps = () => {

    const { apps, loading } = useApp();
    const [loadingSearch, setLoading] = useState(false);


    const [search, setSearch] = useState('')
    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term
        ? apps.filter(app =>
            app.title.toLocaleLowerCase().includes(term)
        )
        : apps

    useEffect(() => {

        console.log(loadingSearch);

        if (search.trim() !== "") {
            setLoading(true);
            const delay = setTimeout(() => {
                setLoading(false);
            }, 600); // adjust delay (ms)
            return () => clearTimeout(delay);

        } else {
            setLoading(false);
        }

    }, [search]);




    return (
        <div>
            <div className='text-center mt-10  mb-4'>
                <h1 className="text-5xl font-bold">Our All Applications</h1 >

                <p className="py-3 text-[11px] text-gray-500">
                    Explore All Trending Apps on the Market developed by us
                </p>

                <div>
                    <div className='flex justify-between py-5 items-center mx-10'>
                        <div>

                            <h1 className='text-3xl font-semibold'>
                                All Apps{' '}
                                <span className='text-sm text-gray-500'>
                                    ({searchedApps.length}) Apps Found.
                                </span>
                            </h1>
                        </div>
                        <label className=' flex flex-col'>
                            <div className='relative flex items-center "'>

                                <Search className="absolute left-3 text-gray-400" />
                                <input
                                    value={search}
                                    onChange={e => setSearch(e.target.value)}
                                    type="search"
                                    placeholder="Search Apps"
                                    className="pl-10 border px-4 rounded-md py-2 w-full"
                                />
                            </div>
                        </label>

                    </div>
                    {loadingSearch && (
                        <div className=''>

                            <LoadingSpinner ></LoadingSpinner>
                        </div>
                    )}
                </div>
            </div>
            {loading ? (
                <LoadingSpinner />
            ) : searchedApps.length === 0 ? (
                <div className='flex justify-center items-center h-[calc(100vh-400px)]'>
                    <h1 className='text-5xl font-bold bg-gradient-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent '>NO data found</h1>
                </div>
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mx-10 pb-10">
                    {searchedApps.map((app, index) => (
                        <AppCard key={index} app={app} />
                    ))}
                </div>
            )}



        </div>

    );
};

export default Apps;