// import axios from 'axios';
// import  { useEffect } from 'react'
// import { JOB_API_END_POINT} from '../utilis/constant'
// import { useDispatch } from 'react-redux';
// import { setAllJobs } from '../redux/jobSlice';

// const useGetAllJobs = () => {
//     const dispatch = useDispatch()
//     useEffect(()=>{
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${ JOB_API_END_POINT}/get`,{withCredentials:true})
//                 if(res.data.success){
//                    dispatch(setAllJobs(res.data.jobs))
//                 }

                
//             } catch (error) {
//                 console.log(error.message);
                
                
//             }
//             fetchAllJobs();
//         }

//     },[]);
 
// }

// export default useGetAllJobs
// import axios from 'axios';
// import { useEffect } from 'react';
// import { JOB_API_END_POINT } from '../utilis/constant';
// import { useDispatch, useSelector } from 'react-redux';
// import { setAllJobs } from '../redux/jobSlice';
// import store from '../redux/store';

// const useGetAllJobs = () => {
//     const dispatch = useDispatch();
//     const {searchedQuery} = useSelector(store=>store.job

//     )

//     useEffect(() => {
//         const fetchAllJobs = async () => {
//             try {
//                 const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`, { withCredentials: true });
//                 if (res.data.success) {
//                     dispatch(setAllJobs(res.data.jobs));
//                 }
//             } catch (error) {
//                 console.log("Error fetching jobs:", error.message);
//             }
//         };

//         fetchAllJobs(); // ✅ Call the function here

//     }, []); // ✅ Add dispatch to dependencies
// };

// export default useGetAllJobs;

import { setAllJobs } from '../redux/jobSlice'
import { JOB_API_END_POINT } from '../utilis/constant'
import axios from 'axios'
import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

const useGetAllJobs = () => {
    const dispatch = useDispatch();
    const {searchedQuery} = useSelector(store=>store.job);
    useEffect(()=>{
        const fetchAllJobs = async () => {
            try {
                const res = await axios.get(`${JOB_API_END_POINT}/get?keyword=${searchedQuery}`,{withCredentials:true});
                if(res.data.success){
                    dispatch(setAllJobs(res.data.jobs));
                }
            } catch (error) {
                console.log(error);
            }
        }
        fetchAllJobs();
    },[])
}

export default useGetAllJobs
