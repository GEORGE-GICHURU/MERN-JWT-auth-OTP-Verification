import React from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

/** import all the components */
import  Username  from './components/Username';
import  Reset  from './components/Reset';
import  Register  from './components/Register';
import  Recovery  from './components/Recovery';
import  Profile  from './components/Profile';
import  Password  from './components/Password';
import  PageNotFound  from './components/PageNotFound';


const router = createBrowserRouter([
  {
  path: "/",
  element: <Username></Username>
  },

  {
    path: "/register",
    element: <Register></Register>
  },

  {
    path: "/password",
    element: <Password></Password>
  },

  {
    path: "/reset",
    element: <Reset></Reset>
  },

  {
    path: "/*",
    element: <PageNotFound></PageNotFound>
  },

  {
    path: "/recovery",
    element: <Recovery></Recovery>
  },

  {
    path: "/profile",
    element: <Profile></Profile>
  },
])

export default function App () {
  return (
    <main>
      <RouterProvider router={router}>

      </RouterProvider>
    </main>

  )
}

