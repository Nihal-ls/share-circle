import React from 'react';
import { createBrowserRouter } from 'react-router';
import App from '../App';
import RootLayout from '../Layouts/RootLayout';
import Home from '../Pages/Root/Home';
import DashboardLayout from '../Layouts/DashboardLayout';
import Login from '../Pages/Login/Login';
import SignUp from '../Pages/SignUp/SignUp';
import DonateItem from '../Pages/Donate/DonateItem';
import ItemsForDonation from '../Pages/Items for donation/ItemsForDonation';
import PrivateRoute from './PrivateRouter';
import Profile from '../Pages/Dashboard/Profile';

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
      path: "donate",
      element: <PrivateRoute>
        <DonateItem />
      </PrivateRoute>
    },
    {
      path: "signup",
      element: <SignUp />,
    },
    {
      path: "items-for-donation",
      element: <ItemsForDonation />
    },
    ]
  }, {
    path: '/dashboard',
    Component: DashboardLayout,
    children: [

      {
        path: "/dashboard/profile",
        element: <PrivateRoute>
          <Profile />
        </PrivateRoute>
      },
    ]
  }
])

export default Router