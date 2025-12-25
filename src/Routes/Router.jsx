import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Root/Home';
import DashboardLayout from '../Layouts/DashboardLayout';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        }]
    }, {
        path: '/dashboard',
        Component: DashboardLayout,
        children: [{
         index: true,
         element: <h1>Example</h1>
        }]
    }
])

export default Router