import React from 'react'
import Navbar from './Components/shared/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './Components/auth/Login'
import Signup from './Components/auth/Signup'
import Home from './Components/Home'
import Jobs from './Components/Jobs'
import Browse from './Components/Browse'
import Profile from './Components/Profile'
import JobDescription from './Components/JobDescription'
import Companies from './Components/admin/Companies'
import CompanyCreate from './Components/admin/CompanyCreate'
import CompanySetup from './Components/admin/CompanySetup'
import AdminJobs from './Components/admin/AdminJobs'
import PostJob from './Components/admin/PostJob'
import Applicants from './Components/admin/Applicants'
import ProtectedRoute from './Components/admin/ProtectedRoute'




const appRouter = createBrowserRouter([
  {
    path: '/',
    element:<Home/>
  },
  {
    path: '/login',
    element:<Login/>
  },
  {
    path: '/signup',
    element:<Signup/>
  },
  {
    path: '/jobs',
    element:<Jobs/>
  },
  {
    path: '/description/:id',
    element:<JobDescription/>
  },
  {
    path: '/browse',
    element:<Browse/>
  },
  {
    path: '/profile',
    element:<Profile/>
  },
  //  admin le liya ab routes bnega
  {
    path: '/admin/companies',
    element:   <ProtectedRoute> <Companies/> </ProtectedRoute>
  },
  {
    path: '/admin/companies/create',
    element:          <ProtectedRoute><CompanyCreate/></ProtectedRoute>
  },
  {
    path: '/admin/companies/:id',
    element:   <ProtectedRoute><CompanySetup /></ProtectedRoute> 
  },
  {
    path: '/admin/jobs',
    element:       <ProtectedRoute><AdminJobs /></ProtectedRoute>  
  },
  {
    path: '/admin/jobs/create',
    element:     <ProtectedRoute> <PostJob /></ProtectedRoute>  
  },
  {
    path: '/admin/jobs/:id/applicants',
    element:       <ProtectedRoute>   <Applicants /></ProtectedRoute>           
  },
  
])

const App = () => {
  return (
    <>
      
    <RouterProvider router={appRouter}/>
      
    </>
  )
}

export default App

