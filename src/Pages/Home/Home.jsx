import React from 'react';
import Banner from '../../Components/Banner/Banner';
import useApp from '../../hooks/useApp';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import AppsCard from '../../Components/AppsCard/AppsCard';


const Home = () => {

    const { apps, loading } = useApp();
    
    

   





    return (
        <div>
            <Banner></Banner>
            {loading ? (
                <LoadingSpinner></LoadingSpinner>
            ) : (
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4'>
                    {
                       
                        apps.map((app,index)=><AppsCard key={index} app={app} ></AppsCard>)
                    }
                </div>
            )}
        </div>
    );
};

export default Home;