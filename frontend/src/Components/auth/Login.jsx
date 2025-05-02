import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Input } from "../ui/input"
import { Label } from "@/components/ui/label"
import { RadioGroup } from "@/components/ui/radio-group"
import { Button } from '../ui/button'
import { toast } from 'sonner'
import axios from 'axios' // ✅ Import axios
import { USER_API_END_POINT } from "../../utilis/constant";
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { setUser } from '../../redux/authSlice'
import store from '../../redux/store'
import { Loader2 } from 'lucide-react'
 // Adjust the path if needed



const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });
  const {loading,user} = useSelector(store=>store.auth)

  const navigate = useNavigate();
  const dispatch = useDispatch() // ✅ Fix: Define navigate

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
        dispatch(setUser(res.data.user))
        toast.success(res.data.message);
        navigate("/"); // ✅ Navigate after successful login
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response?.data?.message || "Login failed");
    } finally{
      dispatch(setLoading(false));

    }
  };
  useEffect(()=>{
    if(user){
      navigate("/")

    }
  },[])

  return ( // ✅ Move return outside of try/catch
    <div>
      <Navbar />
      <div className='flex items-center justify-center max-w-7xl mx-auto'>
        <form onSubmit={submitHandler} className='w-1/2 border border-gray-200 rounded-md p-4 my-10'>
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
            <RadioGroup className="flex items-center gap-6 my-5 font-bold">
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
         loading ? <Button   className="w-full my-4"><Loader2 className='mr-2 h-4 w-4 animate-spin'/> Please Wait</Button>:
         
         <Button type="submit" className="w-full my-4">Login</Button>
          } 


          <span className='mx-20'>
            Don't have an account? 
            <Link to="/signup" className="text-blue-900"> Signup</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
