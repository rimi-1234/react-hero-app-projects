import { createBrowserRouter } from 'react-router'
import MainLayout from '../Layout/MainLayout/MainLayout';
import Home from '../Pages/Home/Home';

import Apps from '../Pages/Apps/Apps';
import LoadingSpinner from '../Components/LoadingSpinner/LoadingSpinner';

export const router = createBrowserRouter([
    {
        path: "/",
        Component: MainLayout,
        hydrateFallbackElement: <LoadingSpinner />,



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

        ]

    },

]);