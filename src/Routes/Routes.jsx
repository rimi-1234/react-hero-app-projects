import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';

import Apps from '../Pages/Apps/Apps';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';
import SingleAppdetail from '../Components/SingleAppdetail/SingleAppdetail';
import Installation from '../Pages/Installation/Installation';
import ErrorPages from '../Pages/ErrorPages/ErrorPages';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        hydrateFallbackElement: <LoadingSpinner />,
        errorElement: <ErrorPages></ErrorPages>,



        children: [
            {
                index: true,
                path: "/",
                Component: Home,
                loader: async () => {
                    await new Promise(r => setTimeout(r, 1000)); // simulate async delay
                    return null;
                },

            },

            {

                path: "/apps",
                Component: Apps,
                loader: async () => {
                    await new Promise(r => setTimeout(r, 1000)); // simulate async delay
                    return null;
                },

            },
            {

                path: "/installation",
                Component: Installation,
                loader: async () => {
                    await new Promise(r => setTimeout(r, 1000)); // simulate async delay
                    return null;
                },

            },
            {

                path: "/apps/:id",
                Component: SingleAppdetail,
                
                loader: async () => {
                    await new Promise(r => setTimeout(r, 1000)); // simulate async delay
                    return null;
                },


            },

        ]

    },

]);