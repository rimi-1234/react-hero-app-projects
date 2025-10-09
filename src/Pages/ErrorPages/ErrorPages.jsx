import React from 'react';
import errorImg from '../../assets/error-404.png'
import { useNavigate } from 'react-router';
const ErrorPages = () => {
      let navigate = useNavigate();
    return (
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
    );
};

export default ErrorPages;