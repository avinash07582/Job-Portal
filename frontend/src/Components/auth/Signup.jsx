// import React, { useEffect, useState } from 'react'
// import { Link, useNavigate } from 'react-router-dom'
// import Navbar from '../shared/Navbar'
// import { Input } from "../ui/input"
// import { Label } from "../../Components/ui/label"
// import { RadioGroup } from "../../Components/ui/radio-group"
// import { Button } from '../ui/button'
// import axios from 'axios'
// import { toast } from 'sonner'
// import { USER_API_END_POINT } from "../../utilis/constant";
// import { useDispatch, useSelector } from 'react-redux'
// import { setLoading } from '../../redux/authSlice'
// import { Loader2 } from 'lucide-react'

// const Signup = () => {
//   const [input, setInput] = useState({
//     fullname: "",
//     email: "",
//     phoneNumber: "",
//     password: "",
//     role: "",
//     file: ""
//   });

//   const { loading, user } = useSelector(store => store.auth)
//   const dispatch = useDispatch()
//   const navigate = useNavigate()

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const changeFileHandler = (e) => {
//     setInput({ ...input, file: e.target.files?.[0] });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     const formData = new FormData();
//     formData.append("fullname", input.fullname);
//     formData.append("email", input.email);
//     formData.append("password", input.password);
//     formData.append("phoneNumber", input.phoneNumber);
//     formData.append("role", input.role);
//     formData.append("file", input.file);

//     try {
//       dispatch(setLoading(true));

//       const res = await axios.post(
//         `${USER_API_END_POINT}/register`,
//         formData,
//         {
//           headers: {
//             "Content-Type": "multipart/form-data",
//           },
//           withCredentials: true,
//         }
//       );

//       if (res && res.data) {
//         toast.success(res.data.message || "Signup successful!");
//         navigate("/login");
//       } else {
//         throw new Error("Empty response from server");
//       }
//     } catch (error) {
//       console.error("Signup Error:", error);

//       if (error.response && error.response.data) {
//         toast.error(error.response.data.message || "Signup failed!");
//       } else {
//         toast.error("Something went wrong. Please try again!");
//       }
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
//           <h1 className='font-bold text-xl mb-5'>Signup</h1>

//           <div className="my-2">
//             <label>Full Name</label>
//             <Input
//               type="text"
//               placeholder="Enter your Full Name"
//               required
//               value={input.fullname}
//               name="fullname"
//               onChange={changeEventHandler}
//             />
//           </div>

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
//             <label>Phone Number</label>
//             <Input
//               type="number"
//               placeholder="Enter your Phone Number"
//               required
//               value={input.phoneNumber}
//               name="phoneNumber"
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

//           <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">

//             <RadioGroup className="flex flex-wrap items-center gap-4 sm:gap-6 my-5 font-bold">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === 'student'}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>

//               <div className="flex items-center space-x-2">
//                 <Input
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   checked={input.role === 'recruiter'}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>

//             <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 sm:py-5">
//               <Label>Profile</Label>

//               <Input
//                 accept="image/*"
//                 type="file"
//                 onChange={changeFileHandler}
//                 placeholder="Select a profile picture"
//                 className="cursor-pointer"
//               />
//             </div>

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
//                   Signup
//                 </Button>
//               )
//           }

//           <span className="block text-center sm:text-left">
//             Already have an account?{" "}
//             <Link to="/login" className="text-blue-900">
//               Login
//             </Link>
//           </span>

//         </form>
//       </div>
//     </div>
//   )
// }

// export default Signup




import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../shared/Navbar'
import { Input } from "../ui/input"
import { Label } from "../../Components/ui/label"
import { Button } from '../ui/button'
import axios from 'axios'
import { toast } from 'sonner'
import { USER_API_END_POINT } from "../../utilis/constant"
import { useDispatch, useSelector } from 'react-redux'
import { setLoading } from '../../redux/authSlice'
import {
  Loader2,
  Mail,
  Lock,
  Phone,
  UserRound,
  BriefcaseBusiness,
  Upload
} from 'lucide-react'

const Signup = () => {
  const [input, setInput] = useState({
    fullname: "",
    email: "",
    phoneNumber: "",
    password: "",
    role: "",
    file: ""
  })

  const { loading, user } = useSelector(store => store.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const changeEventHandler = (e) => {
    setInput({
      ...input,
      [e.target.name]: e.target.value
    })
  }

  const changeFileHandler = (e) => {
    setInput({
      ...input,
      file: e.target.files?.[0]
    })
  }

  const submitHandler = async (e) => {
    e.preventDefault()

    const formData = new FormData()

    formData.append("fullname", input.fullname)
    formData.append("email", input.email)
    formData.append("password", input.password)
    formData.append("phoneNumber", input.phoneNumber)
    formData.append("role", input.role)
    formData.append("file", input.file)

    try {
      dispatch(setLoading(true))

      const res = await axios.post(
        `${USER_API_END_POINT}/register`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
          withCredentials: true,
        }
      )

      if (res && res.data) {
        toast.success(res.data.message || "Signup successful!")
        navigate("/login")
      } else {
        throw new Error("Empty response from server")
      }

    } catch (error) {
      console.error("Signup Error:", error)

      if (error.response && error.response.data) {
        toast.error(
          error.response.data.message || "Signup failed!"
        )
      } else {
        toast.error(
          "Something went wrong. Please try again!"
        )
      }

    } finally {
      dispatch(setLoading(false))
    }
  }

  useEffect(() => {
    if (user) {
      navigate("/")
    }
  }, [user, navigate])

  return (
    <div className="min-h-screen bg-white relative overflow-hidden">

      {/* ================= BACKGROUND ================= */}

      <div className="absolute inset-0 pointer-events-none">

        {/* Top Left Glow */}
        <div
          className="
            absolute
            -top-32
            -left-32
            w-72
            h-72
            sm:w-96
            sm:h-96
            rounded-full
            blur-3xl
            bg-[#8200DB]/20
            animate-pulse
          "
        />

        {/* Right Glow */}
        <div
          className="
            absolute
            top-1/3
            -right-40
            w-72
            h-72
            sm:w-96
            sm:h-96
            rounded-full
            blur-3xl
            bg-[#8200DB]/15
            animate-pulse
          "
        />

        {/* Bottom Glow */}
        <div
          className="
            absolute
            -bottom-40
            left-1/3
            w-80
            h-80
            sm:w-[500px]
            sm:h-[500px]
            rounded-full
            blur-3xl
            bg-[#8200DB]/10
          "
        />

      </div>

      {/* ================= NAVBAR ================= */}

      <div className="relative z-20">
        <Navbar />
      </div>

      {/* ================= SIGNUP SECTION ================= */}

      <main
        className="
          relative
          z-10
          min-h-[calc(100vh-72px)]
          flex
          items-center
          justify-center
          px-4
          py-8
          sm:px-6
          sm:py-12
        "
      >

        <div className="w-full max-w-lg">

          {/* ================= HEADER ================= */}

          <div
            className="
              text-center
              mb-6
              sm:mb-8
              animate-[fadeInUp_0.6s_ease-out]
            "
          >

            {/* Icon */}
            <div
              className="
                inline-flex
                items-center
                justify-center
                w-14
                h-14
                sm:w-16
                sm:h-16
                rounded-2xl
                bg-[#8200DB]
                shadow-xl
                shadow-[#8200DB]/30
                mb-4
                transition-all
                duration-300
                hover:scale-110
                hover:rotate-2
              "
            >
              <UserRound
                className="
                  w-7
                  h-7
                  sm:w-8
                  sm:h-8
                  text-white
                "
              />
            </div>

            <h1
              className="
                text-2xl
                sm:text-3xl
                font-bold
                tracking-tight
                text-gray-900
              "
            >
              Create Your Account
            </h1>

            <p
              className="
                text-sm
                sm:text-base
                text-gray-500
                mt-2
                px-4
              "
            >
              Join us and take the next step in your career
            </p>

          </div>

          {/* ================= FORM ================= */}

          <form
            onSubmit={submitHandler}
            className="
              relative
              bg-white/95
              backdrop-blur-xl
              border
              border-[#8200DB]/10
              rounded-2xl
              p-5
              sm:p-7
              md:p-8
              shadow-[0_20px_60px_-15px_rgba(130,0,219,0.20)]
              animate-[fadeInUp_0.7s_ease-out]
              transition-all
              duration-300
              hover:shadow-[0_25px_70px_-15px_rgba(130,0,219,0.28)]
            "
          >

            {/* Top Purple Line */}
            <div
              className="
                absolute
                top-0
                left-6
                right-6
                sm:left-8
                sm:right-8
                h-[2px]
                bg-gradient-to-r
                from-transparent
                via-[#8200DB]
                to-transparent
              "
            />

            {/* ================= FULL NAME ================= */}

            <div className="mb-4">

              <Label className="text-sm font-medium text-gray-700">
                Full Name
              </Label>

              <div className="relative mt-2">

                <UserRound
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-[#8200DB]
                  "
                />

                <Input
                  type="text"
                  placeholder="Enter your full name"
                  required
                  value={input.fullname}
                  name="fullname"
                  onChange={changeEventHandler}
                  className="
                    h-11
                    pl-10
                    rounded-xl
                    border-gray-200
                    focus-visible:ring-[#8200DB]
                    focus-visible:border-[#8200DB]
                    hover:border-[#8200DB]/50
                    transition-all
                  "
                />

              </div>

            </div>

            {/* ================= EMAIL ================= */}

            <div className="mb-4">

              <Label className="text-sm font-medium text-gray-700">
                Email Address
              </Label>

              <div className="relative mt-2">

                <Mail
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-[#8200DB]
                  "
                />

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
                    focus-visible:ring-[#8200DB]
                    focus-visible:border-[#8200DB]
                    hover:border-[#8200DB]/50
                    transition-all
                  "
                />

              </div>

            </div>

            {/* ================= PHONE ================= */}

            <div className="mb-4">

              <Label className="text-sm font-medium text-gray-700">
                Phone Number
              </Label>

              <div className="relative mt-2">

                <Phone
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-[#8200DB]
                  "
                />

                <Input
                  type="tel"
                  inputMode="numeric"
                  placeholder="Enter your phone number"
                  required
                  value={input.phoneNumber}
                  name="phoneNumber"
                  onChange={changeEventHandler}
                  className="
                    h-11
                    pl-10
                    rounded-xl
                    border-gray-200
                    focus-visible:ring-[#8200DB]
                    focus-visible:border-[#8200DB]
                    hover:border-[#8200DB]/50
                    transition-all
                  "
                />

              </div>

            </div>

            {/* ================= PASSWORD ================= */}

            <div className="mb-5">

              <Label className="text-sm font-medium text-gray-700">
                Password
              </Label>

              <div className="relative mt-2">

                <Lock
                  className="
                    absolute
                    left-3
                    top-1/2
                    -translate-y-1/2
                    w-4
                    h-4
                    text-[#8200DB]
                  "
                />

                <Input
                  type="password"
                  placeholder="Create a password"
                  required
                  value={input.password}
                  name="password"
                  onChange={changeEventHandler}
                  className="
                    h-11
                    pl-10
                    rounded-xl
                    border-gray-200
                    focus-visible:ring-[#8200DB]
                    focus-visible:border-[#8200DB]
                    hover:border-[#8200DB]/50
                    transition-all
                  "
                />

              </div>

            </div>

            {/* ================= ROLE ================= */}

            <div className="mb-5">

              <Label className="text-sm font-medium text-gray-700">
                Register as
              </Label>

              <div
                className="
                  grid
                  grid-cols-1
                  sm:grid-cols-2
                  gap-3
                  mt-2
                "
              >

                {/* Student */}

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
                        ? "border-[#8200DB] bg-[#8200DB]/5 shadow-md shadow-[#8200DB]/10 scale-[1.01]"
                        : "border-gray-200 hover:border-[#8200DB]/40 hover:bg-[#8200DB]/5"
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
                        w-9
                        h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          input.role === "student"
                            ? "bg-[#8200DB] text-white rotate-3"
                            : "bg-[#8200DB]/10 text-[#8200DB]"
                        }
                      `}
                    >
                      <UserRound className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Student
                      </p>

                      <p className="text-xs text-gray-400">
                        Find opportunities
                      </p>
                    </div>

                  </div>

                </label>

                {/* Recruiter */}

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
                        ? "border-[#8200DB] bg-[#8200DB]/5 shadow-md shadow-[#8200DB]/10 scale-[1.01]"
                        : "border-gray-200 hover:border-[#8200DB]/40 hover:bg-[#8200DB]/5"
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
                        w-9
                        h-9
                        shrink-0
                        rounded-lg
                        flex
                        items-center
                        justify-center
                        transition-all
                        duration-300
                        ${
                          input.role === "recruiter"
                            ? "bg-[#8200DB] text-white -rotate-3"
                            : "bg-[#8200DB]/10 text-[#8200DB]"
                        }
                      `}
                    >
                      <BriefcaseBusiness className="w-4 h-4" />
                    </div>

                    <div>
                      <p className="text-sm font-semibold text-gray-800">
                        Recruiter
                      </p>

                      <p className="text-xs text-gray-400">
                        Post opportunities
                      </p>
                    </div>

                  </div>

                </label>

              </div>

            </div>

            {/* ================= PROFILE ================= */}

            <div className="mb-6">

              <Label className="text-sm font-medium text-gray-700">
                Profile Picture
              </Label>

              <label
                className="
                  mt-2
                  flex
                  items-center
                  gap-3
                  w-full
                  min-h-12
                  px-3
                  rounded-xl
                  border
                  border-dashed
                  border-gray-300
                  cursor-pointer
                  bg-gray-50/50
                  hover:bg-[#8200DB]/5
                  hover:border-[#8200DB]/50
                  transition-all
                  duration-300
                "
              >

                <div
                  className="
                    w-9
                    h-9
                    shrink-0
                    rounded-lg
                    bg-[#8200DB]/10
                    flex
                    items-center
                    justify-center
                  "
                >
                  <Upload className="w-4 h-4 text-[#8200DB]" />
                </div>

                <div className="min-w-0 flex-1">

                  <p className="text-sm font-medium text-gray-700 truncate">
                    {input.file
                      ? input.file.name
                      : "Choose profile picture"
                    }
                  </p>

                  <p className="text-xs text-gray-400">
                    JPG, PNG or JPEG
                  </p>

                </div>

                <Input
                  accept="image/*"
                  type="file"
                  onChange={changeFileHandler}
                  className="hidden"
                />

              </label>

            </div>

            {/* ================= SIGNUP BUTTON ================= */}

            <Button
              type="submit"
              disabled={loading}
              className="
                w-full
                h-11
                rounded-xl
                bg-[#8200DB]
                hover:bg-[#7000BD]
                text-white
                font-semibold
                shadow-lg
                shadow-[#8200DB]/30
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
                  <Loader2
                    className="
                      mr-2
                      h-4
                      w-4
                      animate-spin
                    "
                  />

                  Creating Account...
                </>
              ) : (
                "Create Account"
              )}

            </Button>

            {/* ================= LOGIN ================= */}

            <div
              className="
                text-center
                mt-6
                text-sm
                text-gray-500
              "
            >

              Already have an account?{" "}

              <Link
                to="/login"
                className="
                  font-semibold
                  text-[#8200DB]
                  hover:text-[#7000BD]
                  hover:underline
                  transition-colors
                "
              >
                Login
              </Link>

            </div>

          </form>

          {/* Footer */}
          <p
            className="
              text-center
              text-xs
              text-gray-400
              mt-5
              sm:mt-6
              animate-[fadeIn_1s_ease-out]
            "
          >
            Create your account • Start your career journey
          </p>

        </div>

      </main>

      {/* ================= ANIMATIONS ================= */}

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
  )
}

export default Signup

