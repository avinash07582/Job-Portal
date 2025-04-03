

import React from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@radix-ui/react-popover";
import { Button } from '../ui/button';
import { Avatar } from '../ui/avatar';
import { AvatarImage } from '@radix-ui/react-avatar';
import { LogOut, User2, Home, Briefcase, Compass, BriefcaseBusiness } from "lucide-react";
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from '../../utilis/constant';
import { setUser } from '../../redux/authSlice';

const Navbar = () => {
  const { user } = useSelector(store => store.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, { withCredentials: true });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Logout failed");
    }
  };

  return (
    <div className='bg-white shadow-md'>
      <div className='flex items-center justify-between mx-auto max-w-7xl px-6 h-16'>

        {/* Left Section - Logo with Icon */}
        <div className="left flex items-center gap-2">
          <BriefcaseBusiness   onClick={()=>navigate("/")}   className="h-8 w-8 text-[#972081]" /> {/* Stylish Icon */}
          <h1 className='text-2xl font-bold text-gray-800'>
            Job <span className='text-[#972081]'>Portal</span>
          </h1>
        </div>

        {/* Center - Navigation Links */}
        <div className="center">
          <ul className='flex font-medium items-center gap-6 text-gray-700'>
            {user && user.role === 'recruiter' ? (
              <>
                <li className='flex items-center gap-2 hover:text-purple-600 transition-all'>
                  <Briefcase className="h-5 w-5" />
                  <Link to="/admin/companies">Companies</Link>
                </li>
                <li className='flex items-center gap-2 hover:text-purple-600 transition-all'>
                  <Briefcase className="h-5 w-5" />
                  <Link to="/admin/jobs">Jobs</Link>
                </li>
              </>
            ) : (
              <>
                <li className='flex items-center gap-2 hover:text-purple-600 transition-all'>
                  <Home className="h-5 w-5" />
                  <Link to="/">Home</Link>
                </li>
                <li className='flex items-center gap-2 hover:text-purple-600 transition-all'>
                  <Briefcase className="h-5 w-5" />
                  <Link to="/jobs">Jobs</Link>
                </li>
                <li className='flex items-center gap-2 hover:text-purple-600 transition-all'>
                  <Compass className="h-5 w-5" />
                  <Link to="/browse">Browse</Link>
                </li>
              </>
            )}
          </ul>
        </div>

        {/* Right Section - Login/SignUp or User Profile */}
        <div className="right flex items-center gap-6">
          {!user ? (
            <div className="flex items-center gap-4">
              <Link to="/login">
                <Button className="bg-purple-500 hover:bg-purple-700">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-gray-200 hover:bg-gray-300 text-gray-800">Sign Up</Button>
              </Link>
            </div>
          ) : (
            <Popover>
              <PopoverTrigger asChild>
                <Avatar className="cursor-pointer border-2 border-gray-300 hover:border-purple-500 transition">
                  <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                </Avatar>
              </PopoverTrigger>
              <PopoverContent className='w-72 p-4 rounded-lg shadow-lg border bg-white'>
                <div className="flex items-center gap-4">
                  <Avatar className="w-12 h-12">
                    <AvatarImage src={user?.profile?.profilePhoto} alt="User Profile" />
                  </Avatar>
                  <div>
                    <h4 className='font-medium text-lg text-gray-800'>{user.fullname}</h4>
                    <p className='text-sm text-gray-500'>{user?.profile?.bio}</p>
                  </div>
                </div>

                <div className="flex flex-col mt-4 text-gray-700">
                  {user && user.role === 'student' && (
                    <div className='flex items-center gap-2 cursor-pointer hover:text-purple-600 transition-all'>
                      <User2 className="h-5 w-5" />
                      <Button variant="link">
                        <Link to="/profile">View Profile</Link>
                      </Button>
                    </div>
                  )}
                  <div className="flex items-center gap-2 cursor-pointer hover:text-red-600 transition-all">
                    <LogOut className="h-5 w-5" />
                    <Button onClick={logoutHandler} variant="link" className="text-red-500">
                      Logout
                    </Button>
                  </div>
                </div>
              </PopoverContent>
            </Popover>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
