import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router";
import MainLayout from './Layout/MainLayout.jsx';
import Home from './Hero/Home.jsx';
import SignIn from './Layout/AuthLayout/SignIn.jsx';
import SignUp from './Layout/AuthLayout/SignUp.jsx';
import AuthProvider from './Provider/AuthProvider.jsx'

import { QueryClient, QueryClientProvider, } from '@tanstack/react-query'
import ClubDetails from './Details/ClubDetails.jsx';
import PivateRoute from './Provider/PrivateRoute.jsx';
import DashboardLayout from './AddClub/DashboardLayout/DashboardLayout.jsx';
import Statistics from './AddClub/DashboardLayout/Statistics.jsx';
import AddClub from './AddClub/DashboardLayout/Host/AddClub.jsx';
import MyListings from './AddClub/DashboardLayout/Host/MyListings.jsx';
const queryClient = new QueryClient()

const router = createBrowserRouter([
  {
    path: "/",
    // errorElement: <div>Error</div>,
    element: <MainLayout />,
    children: [
      {
        path: '/',
      
        element: <Home />,


      },
      {
        path: 'signIn',
        element: <SignIn />
      },
      {
        path: 'signUp',
        element: <SignUp />
      },
      {
        path:'/clubDetails/:id',
        element:<PivateRoute>
          <ClubDetails/>
        </PivateRoute>
      
        
      }
    ]
  
  },
  {
    path:'/dashboard',
    element:<DashboardLayout/>,
    children: [
      {
        index:true,
        element:<Statistics/>,
      },
      {
        path:'addClub',
        element:<AddClub/>
      },
      {
        path:'myListings',
        element:<MyListings/>
      }

    ],
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <AuthProvider>

        <RouterProvider router={router} />

      </AuthProvider>

    </QueryClientProvider>

  </StrictMode>,
)
