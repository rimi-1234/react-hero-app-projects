import React from 'react';
import Navbar from '../../Components/Navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import LoadingSpinner from '../../Components/LoadingSpinner/LoadingSpinner';
import Footer from '../../Components/Footer/Footer';


const MainLayout = () => {
    const navigation = useNavigation();

    const isNavigating = navigation.state

    
    
    

  
    return (
        <div className='flex flex-col min-h-screen'>
            <Navbar />
            <div className=' flex-1 bg-base-200'>
                  {isNavigating==='loading' ? <LoadingSpinner /> : <Outlet />}
               
            </div>
            <Footer />
        </div>
    );
};

export default MainLayout;