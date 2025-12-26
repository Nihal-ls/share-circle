import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Root/Home';
import DashboardLayout from '../Layouts/DashboardLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';

const Router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        children: [{
            index: true,
            element: <Home />
        },
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <SignUp />,
      },]
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