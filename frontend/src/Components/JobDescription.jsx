// import React, { useEffect } from 'react'
// import { Badge } from "@/components/ui/badge"
// import { Button } from './ui/button'
// import { useParams } from 'react-router-dom';

// import { setSingleJob } from '../redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import {JOB_API_END_POINT} from '../utilis/constant'

// const JobDescription = () => {
//   const dispatch = useDispatch()
//   const isApplied = true;
//   const params = useParams()
//   const jobId = params.id
//   const {user} = useSelector(state => state.auth);
//   const {singlejob} =(store=>store.job);
 
//   useEffect(() => {
//     const fetchSingleJob = async () => {
//         try {
//             const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//               console.log(res);
              
//             if (res.data.success) {
//                 dispatch(setSingleJob(res.data.job));
//             }
//         } catch (error) {
//             console.log("Error fetching jobs:", error.message);
//         }
//     };

//     fetchSingleJob() // ✅ Call the function here

// }, [jobId ,dispatch,user?._id]); // ✅ Add dispatch to dependencies
//   return (
//     <div className=' max-w-7xl mx-auto my-10'>
//     <div className=" flex items-center justify-between">
//     <div className="">
//         <h1 className='font-bold text-xl'>{singlejob?.title }</h1>
//         <div className="flex items-center gap-2 mt-4">
//         <Badge className={'text-blue-700 font-bold'} variant="ghost">{singlejob?.postion} Positions</Badge>
//                         <Badge className={'text-[#F83002] font-bold'} variant="ghost">{singlejob?.jobType}</Badge>
//                         <Badge className={'text-[#7209b7] font-bold'} variant="ghost">{singlejob?.salary}LPA</Badge>
//         </div>
        
//       </div>

//       <Button  disabled = {isApplied}   className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}> { isApplied ? "Already Applied" :"Apply Now"}</Button>
//     </div>
//     <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//             <div className='my-4'>
//                 <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singlejob?.title}</span></h1>
//                 <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singlejob?.location}</span></h1>
//                 <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singlejob?.description}</span></h1>
//                 <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'> {singlejob?.experience}2yrs </span></h1>
//                 <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singlejob?.salary}LPA</span></h1>
//                 <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>5</span></h1>
//                 <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>06-03-2025</span></h1>
//             </div>
             
      
//     </div>
//   )
// }

// export default JobDescription
// import React, { useEffect } from 'react';
// import { Badge } from "@/components/ui/badge";
// import { Button } from './ui/button';
// import { useParams } from 'react-router-dom';
// import { setSingleJob } from '../redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '../utilis/constant';

// const JobDescription = () => {
//   const singlejob = useSelector(state => state.job.singlejob); // ✅ Correct way to use useSelector
//   const dispatch = useDispatch();
//   const isApplied = singlejob?.applications?.some(application => application.applicant === user?._id) || false;
//   const { id: jobId } = useParams(); // Extract job ID from URL params
//   const { user } = useSelector(state => state.auth);
  

//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//         console.log("API Response:", res.data); // ✅ Debug API response
        
//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));
//         }
//       } catch (error) {
//         console.log("Error fetching job:", error.message);
//       }
//     };

//     fetchSingleJob(); // ✅ Call the function here

//   }, [jobId, dispatch, user?._id]); // ✅ Add dispatch & jobId to dependencies

//   return (
//     <div className='max-w-7xl mx-auto my-10'>
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className='font-bold text-xl'>{singlejob?.title || "Loading..."}</h1>
//           <div className="flex items-center gap-2 mt-4">
//             <Badge className='text-blue-700 font-bold' variant="ghost">
//               {singlejob?.position || "N/A"} Positions
//             </Badge>
//             <Badge className='text-[#F83002] font-bold' variant="ghost">
//               {singlejob?.jobType || "N/A"}
//             </Badge>
//             <Badge className='text-[#7209b7] font-bold' variant="ghost">
//               {singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}
//             </Badge>
//           </div>
//         </div>

//         <Button 
//           disabled={isApplied} 
//           className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//       <div className='my-4'>
//         <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singlejob?.title || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singlejob?.location || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singlejob?.description || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singlejob?.experience || "N/A"} yrs</span></h1>
//         <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singlejob?.applications.length}</span></h1>
//         <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singlejob?.createdAt.split("T")[0]}</span></h1>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;
// import React, { useEffect, useState } from 'react';
// import { Badge } from "@/components/ui/badge";
// import { Button } from './ui/button';
// import { useParams } from 'react-router-dom';
// import { setSingleJob } from '../redux/jobSlice';
// import { useDispatch, useSelector } from 'react-redux';
// import axios from 'axios';
// import { JOB_API_END_POINT } from '../utilis/constant';
// import {APPLICATION_API_END_POINT} from '../utilis/constant'
// import { toast } from 'sonner';

// const JobDescription = () => {
//   const dispatch = useDispatch();
//   const { id: jobId } = useParams(); // Extract job ID from URL params
//   const { user } = useSelector(state => state.auth);
//   const singlejob = useSelector(state => state.job.singlejob) || {}; // ✅ Ensure it's always an object
//   const  isIntiallyApplied = singlejob?.applications?.some(application => application.applicant === user?._id) || false;
//    const [isApplied, setIsApplied] = useState(isIntiallyApplied)


//   const applyJobHandler = async ()=>{
   
//     try {
//       const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`,{withCredentials:true});
//       console.log(res.data);
      
//       if(res.data.success){
//         // updateb the local state
//         setIsApplied(true)
//         const updatedSingleJob = {...singlejob, applications:[...singlejob.applications,{applicant:user?._id}]}
//         //  helps us to update real time ui means button
//         dispatch(setSingleJob(updatedSingleJob))
//          toast.success(res.data.message)
//       }
      
//     } catch (error) {
//       console.log(error.message);
//       toast.error(error.response.data.message);
      
//     }
//   }



//   useEffect(() => {
//     const fetchSingleJob = async () => {
//       try {
//         const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
//         console.log("API Response:", res.data);
        
//         if (res.data.success) {
//           dispatch(setSingleJob(res.data.job));
//           setIsApplied(res.data.job.applications.some(application=>application.applicant === user?._id)) // Ensure the state is in sync with fetched data
//         }
//       } catch (error) {
//         console.log("Error fetching job:", error.message);
//       }
//     };

//     fetchSingleJob();
//   }, [jobId, dispatch, user?._id]);

//   // ✅ Prevent errors if job details haven't loaded yet
//   if (!singlejob || Object.keys(singlejob).length === 0) {
//     return <p className="text-center my-10 text-gray-600">Loading job details...</p>;
//   }

//   // ✅ Compute isApplied after ensuring singlejob is defined
 

//   return (
//     <div className='max-w-7xl mx-auto my-10'>
//       <div className="flex items-center justify-between">
//         <div>
//           <h1 className='font-bold text-xl'>{singlejob?.title || "N/A"}</h1>
//           <div className="flex items-center gap-2 mt-4">
//             <Badge className='text-blue-700 font-bold' variant="ghost">
//               {singlejob?.position || "N/A"} Positions
//             </Badge>
//             <Badge className='text-[#F83002] font-bold' variant="ghost">
//               {singlejob?.jobType || "N/A"}
//             </Badge>
//             <Badge className='text-[#7209b7] font-bold' variant="ghost">
//               {singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}
//             </Badge>
//           </div>
//         </div>

//         <Button 
//         onClick = { isApplied ? null : applyJobHandler}
//           disabled={isApplied} 
//           className={`rounded-lg ${isApplied ? 'bg-gray-600 cursor-not-allowed' : 'bg-[#7209b7] hover:bg-[#5f32ad]'}`}
//         >
//           {isApplied ? "Already Applied" : "Apply Now"}
//         </Button>
//       </div>

//       <h1 className='border-b-2 border-b-gray-300 font-medium py-4'>Job Description</h1>
//       <div className='my-4'>
//         <h1 className='font-bold my-1'>Role: <span className='pl-4 font-normal text-gray-800'>{singlejob?.title || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Location: <span className='pl-4 font-normal text-gray-800'>{singlejob?.location || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Description: <span className='pl-4 font-normal text-gray-800'>{singlejob?.description || "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Experience: <span className='pl-4 font-normal text-gray-800'>{singlejob?.experience || "N/A"} yrs</span></h1>
//         <h1 className='font-bold my-1'>Salary: <span className='pl-4 font-normal text-gray-800'>{singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}</span></h1>
//         <h1 className='font-bold my-1'>Total Applicants: <span className='pl-4 font-normal text-gray-800'>{singlejob?.applications?.length || 0}</span></h1>
//         <h1 className='font-bold my-1'>Posted Date: <span className='pl-4 font-normal text-gray-800'>{singlejob?.createdAt?.split("T")[0] || "N/A"}</span></h1>
//       </div>
//     </div>
//   );
// };

// export default JobDescription;



import React, { useEffect, useState } from "react";
import { Badge } from "../Components/ui/badge";
import { Button } from "./ui/button";
import { useParams } from "react-router-dom";
import { setSingleJob } from "../redux/jobSlice";
import { useDispatch, useSelector } from "react-redux";
import axios from "axios";
import { JOB_API_END_POINT, APPLICATION_API_END_POINT } from "../utilis/constant";
import { toast } from "sonner";
import { motion } from "framer-motion";
import { Briefcase, MapPin, DollarSign, Calendar, UserCheck } from "lucide-react";

const JobDescription = () => {
  const dispatch = useDispatch();
  const { id: jobId } = useParams();
  const { user } = useSelector((state) => state.auth);
  const singlejob = useSelector((state) => state.job.singlejob) || {}; // Ensure it's always an object
  const isInitiallyApplied = singlejob?.applications?.some((app) => app.applicant === user?._id) || false;
  const [isApplied, setIsApplied] = useState(isInitiallyApplied);

  const applyJobHandler = async () => {
    try {
      const res = await axios.get(`${APPLICATION_API_END_POINT}/apply/${jobId}`, { withCredentials: true });
      if (res.data.success) {
        setIsApplied(true);
        const updatedSingleJob = { ...singlejob, applications: [...singlejob.applications, { applicant: user?._id }] };
        dispatch(setSingleJob(updatedSingleJob));
        toast.success(res.data.message);
      }
    } catch (error) {
      console.log(error.message);
      toast.error(error.response?.data?.message || "Error applying for job.");
    }
  };

  useEffect(() => {
    const fetchSingleJob = async () => {
      try {
        const res = await axios.get(`${JOB_API_END_POINT}/get/${jobId}`, { withCredentials: true });
        if (res.data.success) {
          dispatch(setSingleJob(res.data.job));
          setIsApplied(res.data.job.applications.some((app) => app.applicant === user?._id));
        }
      } catch (error) {
        console.log("Error fetching job:", error.message);
      }
    };

    fetchSingleJob();
  }, [jobId, dispatch, user?._id]);

  if (!singlejob || Object.keys(singlejob).length === 0) {
    return <p className="text-center my-10 text-gray-600 animate-pulse">Loading job details...</p>;
  }

  return (
    <motiongit.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="max-w-5xl mx-auto my-10 p-6 bg-white shadow-lg rounded-lg"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: 0.1 }}>
          <h1 className="font-bold text-2xl text-gray-800">{singlejob?.title || "N/A"}</h1>
          <div className="flex items-center gap-3 mt-3">
            <Badge className="text-blue-700 font-bold flex items-center gap-1" variant="ghost">
              <Briefcase className="h-4 w-4" /> {singlejob?.position || "N/A"} Positions
            </Badge>
            <Badge className="text-[#F83002] font-bold flex items-center gap-1" variant="ghost">
              <UserCheck className="h-4 w-4" /> {singlejob?.jobType || "N/A"}
            </Badge>
            <Badge className="text-[#7209b7] font-bold flex items-center gap-1" variant="ghost">
              <DollarSign className="h-4 w-4" /> {singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}
            </Badge>
          </div>
        </motion.div>

        {/* Apply Button */}
        <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} transition={{ delay: 0.2 }}>
          <Button
            onClick={isApplied ? null : applyJobHandler}
            disabled={isApplied}
            className={`rounded-lg px-6 py-2 transition-all ${
              isApplied ? "bg-gray-500 cursor-not-allowed" : "bg-[#7209b7] hover:bg-[#5f32ad]"
            }`}
          >
            {isApplied ? "Already Applied" : "Apply Now"}
          </Button>
        </motion.div>
      </div>

      {/* Job Description */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.3 }}
        className="border-b-2 border-gray-300 font-medium pb-2"
      >
        Job Details
      </motion.h1>

      {/* Job Info */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        className="my-6 space-y-3 text-gray-800"
      >
        <div className="flex items-center gap-3">
          <Briefcase className="text-indigo-500" />
          <span className="font-bold">Role:</span> <span className="text-gray-600">{singlejob?.title || "N/A"}</span>
        </div>
        <div className="flex items-center gap-3">
          <MapPin className="text-green-500" />
          <span className="font-bold">Location:</span> <span className="text-gray-600">{singlejob?.location || "N/A"}</span>
        </div>
        <div className="flex items-start gap-3">
          <p className="text-gray-800 font-bold">Description:</p>
          <p className="text-gray-600">{singlejob?.description || "N/A"}</p>
        </div>
        <div className="flex items-center gap-3">
          <UserCheck className="text-blue-500" />
          <span className="font-bold">Experience:</span> <span className="text-gray-600">{singlejob?.experience || "N/A"} yrs</span>
        </div>
        <div className="flex items-center gap-3">
          <DollarSign className="text-green-500" />
          <span className="font-bold">Salary:</span> <span className="text-gray-600">{singlejob?.salary ? `${singlejob.salary} LPA` : "N/A"}</span>
        </div>
        <div className="flex items-center gap-3">
          <UserCheck className="text-yellow-500" />
          <span className="font-bold">Total Applicants:</span> <span className="text-gray-600">{singlejob?.applications?.length || 0}</span>
        </div>
        <div className="flex items-center gap-3">
          <Calendar className="text-gray-500" />
          <span className="font-bold">Posted Date:</span> <span className="text-gray-600">{singlejob?.createdAt?.split("T")[0] || "N/A"}</span>
        </div>
      </motion.div>
    </motiongi.div>
  );
};

export default JobDescription;


