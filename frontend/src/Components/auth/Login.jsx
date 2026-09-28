import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Input } from "../ui/input"
import { Label } from "../../Components/ui/label";
import { RadioGroup } from "../../Components/ui/radio-group"
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios'
import { USER_API_END_POINT } from "../../utilis/constant";
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { setUser } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });

  const { loading, user } = useSelector(store => store.auth)

  const navigate = useNavigate();
  const dispatch = useDispatch()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {

      const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
        headers: {
          'Content-Type': 'application/json'
        },
        withCredentials: true,
      });

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);
        axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
        dispatch(setUser(res.data.user))
        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [])

  return (
    <div>
      <Navbar />

      <div className='flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6'>
        <form
          onSubmit={submitHandler}
          className='w-full sm:w-3/4 md:w-1/2 border border-gray-200 rounded-md p-4 my-10'
        >
          <h1 className='font-bold text-xl mb-5'>Login</h1>

          <div className="my-2">
            <label>Email</label>
            <Input
              type="email"
              placeholder="Enter your Email"
              required
              value={input.email}
              name="email"
              onChange={changeEventHandler}
            />
          </div>

          <div className="my-2">
            <label>Password</label>
            <Input
              type="password"
              placeholder="Enter your Password"
              required
              value={input.password}
              name="password"
              onChange={changeEventHandler}
            />
          </div>

          <div className="flex items-center justify-between">
            <RadioGroup className="flex flex-wrap items-center gap-4 sm:gap-6 my-5 font-bold">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  className="cursor-pointer"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r1">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  className="cursor-pointer"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>
          </div>

          {
            loading
              ? (
                <Button className="w-full my-4">
                  <Loader2 className='mr-2 h-4 w-4 animate-spin' />
                  Please Wait
                </Button>
              )
              : (
                <Button type="submit" className="w-full my-4">
                  Login
                </Button>
              )
          }

          <span className='block text-center sm:text-left'>
            Don't have an account?
            <Link to="/signup" className="text-blue-900"> Signup</Link>
          </span>

        </form>
      </div>
    </div>
  );
};

export default Login;
