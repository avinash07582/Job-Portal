// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Navbar from '../shared/Navbar'
// import { Input } from "../ui/input"
// import { Label } from "../../Components/ui/label";
// import { RadioGroup } from "../../Components/ui/radio-group"
// import { Button } from '../ui/button'
// import { toast } from 'sonner'
// import axios from 'axios'
// import { USER_API_END_POINT } from "../../utilis/constant";
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '../../redux/authSlice'
// import { setUser } from '../../redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Login = () => {
//   const [input, setInput] = useState({
//     email: '',
//     password: '',
//     role: '',
//   });

//   const { loading, user } = useSelector(store => store.auth)

//   const navigate = useNavigate();
//   const dispatch = useDispatch()

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {

//       const res = await axios.post(`${USER_API_END_POINT}/login`, input, {
//         headers: {
//           'Content-Type': 'application/json'
//         },
//         withCredentials: true,
//       });

//       if (res.data.success) {
//         localStorage.setItem("token", res.data.token);
//         axios.defaults.headers.common["Authorization"] = `Bearer ${res.data.token}`;
//         dispatch(setUser(res.data.user))
//         toast.success(res.data.message);
//         navigate("/");
//       }
//     } catch (error) {
//       console.log(error);
//       toast.error(error.response?.data?.message || "Login failed");
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   useEffect(() => {
//     if (user) {
//       navigate("/")
//     }
//   }, [])

//   return (
//     <div>
//       <Navbar />

//       <div className='flex items-center justify-center w-full max-w-7xl mx-auto px-4 sm:px-6'>
//         <form
//           onSubmit={submitHandler}
//           className='w-full sm:w-3/4 md:w-1/2 border border-gray-200 rounded-md p-4 my-10'
//         >
//           <h1 className='font-bold text-xl mb-5'>Login</h1>

//           <div className="my-2">
//             <label>Email</label>
//             <Input
//               type="email"
//               placeholder="Enter your Email"
//               required
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//             />
//           </div>

//           <div className="my-2">
//             <label>Password</label>
//             <Input
//               type="password"
//               placeholder="Enter your Password"
//               required
//               value={input.password}
//               name="password"
//               onChange={changeEventHandler}
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex flex-wrap items-center gap-4 sm:gap-6 my-5 font-bold">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   className="cursor-pointer"
//                   checked={input.role === 'student'}
//                   onChange={changeEventHandler}
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   className="cursor-pointer"
//                   checked={input.role === 'recruiter'}
//                   onChange={changeEventHandler}
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>
//           </div>

//           {
//             loading
//               ? (
//                 <Button className="w-full my-4">
//                   <Loader2 className='mr-2 h-4 w-4 animate-spin' />
//                   Please Wait
//                 </Button>
//               )
//               : (
//                 <Button type="submit" className="w-full my-4">
//                   Login
//                 </Button>
//               )
//           }

//           <span className='block text-center sm:text-left'>
//             Don't have an account?
//             <Link to="/signup" className="text-blue-900"> Signup</Link>
//           </span>

//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;



import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import Navbar from '../shared/Navbar';
import { Input } from "../ui/input";
import { Label } from "../../Components/ui/label";
import { Button } from '../ui/button';
import { toast } from 'sonner';
import axios from 'axios';
import { USER_API_END_POINT } from "../../utilis/constant";
import { useDispatch, useSelector } from 'react-redux';
import { setLoading, setUser } from '../../redux/authSlice';
import {
  Loader2,
  Mail,
  Lock,
  BriefcaseBusiness,
  UserRound
} from 'lucide-react';

const Login = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    role: '',
  });

  const { loading, user } = useSelector(store => store.auth);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    });
  };

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      dispatch(setLoading(true));

      const res = await axios.post(
        `${USER_API_END_POINT}/login`,
        input,
        {
          headers: {
            'Content-Type': 'application/json'
          },
          withCredentials: true,
        }
      );

      if (res.data.success) {
        localStorage.setItem("token", res.data.token);

        axios.defaults.headers.common["Authorization"] =
          `Bearer ${res.data.token}`;

        dispatch(setUser(res.data.user));

        toast.success(res.data.message);
        navigate("/");
      }
    } catch (error) {
      console.log(error);

      toast.error(
        error.response?.data?.message || "Login failed"
      );
    } finally {
      dispatch(setLoading(false));
    }
  };

  useEffect(() => {
    if (user) {
      navigate("/");
    }
  }, [user, navigate]);

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

    

      <div className="absolute inset-0 pointer-events-none">

       
        <div className="
          absolute
          -top-32
          -left-32
          w-72 h-72
          sm:w-96 sm:h-96
          bg-purple-300/25
          rounded-full
          blur-3xl
          animate-pulse
        " />

       
        <div className="
          absolute
          top-1/3
          -right-40
          w-72 h-72
          sm:w-96 sm:h-96
          bg-indigo-300/20
          rounded-full
          blur-3xl
          animate-pulse
          [animation-delay:1.5s]
        " />

     
        <div className="
          absolute
          -bottom-40
          left-1/3
          w-80 h-80
          sm:w-[500px] sm:h-[500px]
          bg-purple-200/20
          rounded-full
          blur-3xl
        " />

      </div>

 

      <div className="relative z-20">
        <Navbar />
      </div>

   

      <main className="
        relative
        z-10
        min-h-[calc(100vh-72px)]
        flex
        items-center
        justify-center
        px-4
        py-10
        sm:px-6
        sm:py-12
      ">

        <div className="
          w-full
          max-w-md
        ">

        

          <div className="
            text-center
            mb-6
            sm:mb-8
            animate-[fadeInUp_0.6s_ease-out]
          ">

          
            <div className="
              inline-flex
              items-center
              justify-center
              w-14 h-14
              sm:w-16 sm:h-16
              rounded-2xl
              bg-gradient-to-br
              from-purple-600
              to-indigo-600
              shadow-xl
              shadow-purple-300/40
              mb-4
              transition-transform
              duration-300
              hover:scale-110
              hover:rotate-2
            ">

              <BriefcaseBusiness
                className="
                  w-7 h-7
                  sm:w-8 sm:h-8
                  text-white
                "
              />

            </div>

            <h1 className="
              text-2xl
              sm:text-3xl
              font-bold
              tracking-tight
              text-gray-900
            ">
              Welcome Back
            </h1>

            <p className="
              text-sm
              sm:text-base
              text-gray-500
              mt-2
              px-4
            ">
              Login to continue your job journey
            </p>

          </div>

    

          <form
            onSubmit={submitHandler}
            className="
              relative
              bg-white/95
              backdrop-blur-xl
              border
              border-purple-100
              rounded-2xl
              p-5
              sm:p-7
              md:p-8
              shadow-[0_20px_60px_-15px_rgba(124,58,237,0.20)]
              animate-[fadeInUp_0.7s_ease-out]
              transition-all
              duration-300
              hover:shadow-[0_25px_70px_-15px_rgba(124,58,237,0.25)]
            "
          >

       
            <div className="
              absolute
              top-0
              left-6
              right-6
              sm:left-8
              sm:right-8
              h-[2px]
              bg-gradient-to-r
              from-transparent
              via-purple-500
              to-transparent
            " />

          

            <div className="mb-5">

              <Label className="
                text-sm
                font-medium
                text-gray-700
              ">
                Email Address
              </Label>

              <div className="relative mt-2">

                <Mail className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4 h-4
                  text-purple-500
                  transition-colors
                " />

                <Input
                  type="email"
                  placeholder="Enter your email"
                  required
                  value={input.email}
                  name="email"
                  onChange={changeEventHandler}
                  className="
                    h-11
                    pl-10
                    rounded-xl
                    border-gray-200
                    bg-white
                    focus-visible:ring-purple-500
                    focus-visible:border-purple-400
                    transition-all
                    duration-200
                    hover:border-purple-300
                  "
                />

              </div>

            </div>

       

            <div className="mb-5">

              <Label className="
                text-sm
                font-medium
                text-gray-700
              ">
                Password
              </Label>

              <div className="relative mt-2">

                <Lock className="
                  absolute
                  left-3
                  top-1/2
                  -translate-y-1/2
                  w-4 h-4
                  text-purple-500
                " />

                <Input
                  type="password"
                  placeholder="Enter your password"
                  required
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  className="
                    h-11
                    pl-10
                    rounded-xl
                    border-gray-200
                    bg-white
                    focus-visible:ring-purple-500
                    focus-visible:border-purple-400
                    transition-all
                    duration-200
                    hover:border-purple-300
                  "
                />

              </div>

            </div>

        

            <div className="mb-6">

              <Label className="
                text-sm
                font-medium
                text-gray-700
              ">
                Login as
              </Label>

              <div className="
                grid
                grid-cols-1
                xs:grid-cols-2
                sm:grid-cols-2
                gap-3
                mt-2
              ">

                {/* STUDENT */}

                <label
                  className={`
                    cursor-pointer
                    rounded-xl
                    border
                    p-3
                    transition-all
                    duration-300
                    ${
                      input.role === "student"
                        ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-100 scale-[1.01]"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/40"
                    }
                  `}
                >

                  <input
                    type="radio"
                    name="role"
                    value="student"
                    checked={input.role === "student"}
                    onChange={changeEventHandler}
                    className="hidden"
                  />

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        w-9 h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          input.role === "student"
                            ? "bg-purple-600 text-white rotate-3"
                            : "bg-purple-100 text-purple-600"
                        }
                      `}
                    >
                      <UserRound className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">

                      <p className="
                        text-sm
                        font-semibold
                        text-gray-800
                      ">
                        Student
                      </p>

                      <p className="
                        text-xs
                        text-gray-400
                        truncate
                      ">
                        Find jobs
                      </p>

                    </div>

                  </div>

                </label>

                {/* RECRUITER */}

                <label
                  className={`
                    cursor-pointer
                    rounded-xl
                    border
                    p-3
                    transition-all
                    duration-300
                    ${
                      input.role === "recruiter"
                        ? "border-purple-500 bg-purple-50 shadow-md shadow-purple-100 scale-[1.01]"
                        : "border-gray-200 hover:border-purple-300 hover:bg-purple-50/40"
                    }
                  `}
                >

                  <input
                    type="radio"
                    name="role"
                    value="recruiter"
                    checked={input.role === "recruiter"}
                    onChange={changeEventHandler}
                    className="hidden"
                  />

                  <div className="flex items-center gap-3">

                    <div
                      className={`
                        w-9 h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          input.role === "recruiter"
                            ? "bg-purple-600 text-white -rotate-3"
                            : "bg-purple-100 text-purple-600"
                        }
                      `}
                    >
                      <BriefcaseBusiness className="w-4 h-4" />
                    </div>

                    <div className="min-w-0">

                      <p className="
                        text-sm
                        font-semibold
                        text-gray-800
                      ">
                        Recruiter
                      </p>

                      <p className="
                        text-xs
                        text-gray-400
                        truncate
                      ">
                        Post jobs
                      </p>

                    </div>

                  </div>

                </label>

              </div>

            </div>


            <Button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-11
                rounded-xl
                bg-gradient-to-r
                from-purple-600
                to-indigo-600
                hover:from-purple-700
                hover:to-indigo-700
                text-white
                font-semibold
                shadow-lg
                shadow-purple-300/30
                transition-all
                duration-300
                hover:-translate-y-0.5
                hover:shadow-xl
                active:scale-[0.98]
                disabled:opacity-70
              "
            >

              {loading ? (
                <>
                  <Loader2 className="
                    mr-2
                    h-4 w-4
                    animate-spin
                  " />

                  Please Wait...
                </>
              ) : (
                "Login"
              )}

            </Button>

         
            <div className="
              text-center
              mt-6
              text-sm
              text-gray-500
            ">

              Don't have an account?{" "}

              <Link
                to="/signup"
                className="
                  font-semibold
                  text-purple-600
                  hover:text-purple-700
                  hover:underline
                  transition-colors
                "
              >
                Create an account
              </Link>

            </div>

          </form>

     

          <p className="
            text-center
            text-xs
            text-gray-400
            mt-5
            sm:mt-6
            animate-[fadeIn_1s_ease-out]
          ">
            Secure login • Find your next opportunity
          </p>

        </div>

      </main>

  

      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          *,
          *::before,
          *::after {
            animation-duration: 0.01ms !important;
            animation-iteration-count: 1 !important;
            transition-duration: 0.01ms !important;
          }
        }
      `}</style>

    </div>
  );
};

export default Login;























