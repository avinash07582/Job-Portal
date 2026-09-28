import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Input } from "../ui/input"
import { Label } from "../../Components/ui/label"
import { RadioGroup } from "../../Components/ui/radio-group"
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { USER_API_END_POINT } from "../../utilis/constant";
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import { Loader2 } from 'lucide-react'

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  });

  const { loading, user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };

  const changeFileHandler = (e) => {
    setInput({ ...input, file: e.target.files?.[0] });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    formData.append("fullname", input.fullname);
    formData.append("email", input.email);
    formData.append("password", input.password);
    formData.append("phoneNumber", input.phoneNumber);
    formData.append("role", input.role);
    formData.append("file", input.file);

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      );

      if (res && res.data) {
        toast.success(res.data.message || "Signup successful!");
        navigate("/login");
      } else {
        throw new Error("Empty response from server");
      }
    } catch (error) {
      console.error("Signup Error:", error);

      if (error.response && error.response.data) {
        toast.error(error.response.data.message || "Signup failed!");
      } else {
        toast.error("Something went wrong. Please try again!");
      }
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
          <h1 className='font-bold text-xl mb-5'>Signup</h1>

          <div className="my-2">
            <label>Full Name</label>
            <Input
              type="text"
              placeholder="Enter your Full Name"
              required
              value={input.fullname}
              name="fullname"
              onChange={changeEventHandler}
            />
          </div>

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
            <label>Phone Number</label>
            <Input
              type="number"
              placeholder="Enter your Phone Number"
              required
              value={input.phoneNumber}
              name="phoneNumber"
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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

            <RadioGroup className="flex flex-wrap items-center gap-4 sm:gap-6 my-5 font-bold">
              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="student"
                  checked={input.role === 'student'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r1">Student</Label>
              </div>

              <div className="flex items-center space-x-2">
                <Input
                  type="radio"
                  name="role"
                  value="recruiter"
                  checked={input.role === 'recruiter'}
                  onChange={changeEventHandler}
                  className="cursor-pointer"
                />
                <Label htmlFor="r2">Recruiter</Label>
              </div>
            </RadioGroup>

            <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 sm:py-5">
              <Label>Profile</Label>

              <Input
                accept="image/*"
                type="file"
                onChange={changeFileHandler}
                placeholder="Select a profile picture"
                className="cursor-pointer"
              />
            </div>

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
                  Signup
                </Button>
              )
          }

          <span className="block text-center sm:text-left">
            Already have an account?{" "}
            <Link to="/login" className="text-blue-900">
              Login
            </Link>
          </span>

        </form>
      </div>
    </div>
  )
}

export default Signup
