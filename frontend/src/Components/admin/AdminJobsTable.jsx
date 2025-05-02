// import React, { useEffect, useState } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Avatar, AvatarImage } from '../ui/avatar'
// import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import store from '../../redux/store'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => {
//   const navigate = useNavigate()
//   const { companies,searchCompanyByText } = useSelector(store => store.company)
//   const {allAdminJobs} = useSelector(store=> store.job)
//   const [filterjobs, setFilterJobs] = useState(allAdminJobs)

//   const [filterCompany, setFilterCompany] = useState(companies)

//   useEffect(()=>{
//     const filteredCompany = allAdminJobs.length >= 0 && allAdminJobs.filter((job)=>{
//       if(!searchCompanyByText){
//         return true;
//       };
//       return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

//     });
//     setFilterJobs(filteredCompany)

//   },[companies,searchCompanyByText])

//   return (
//     <div>
//       <Table>
//         <TableCaption> A list of your recent posted jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Company Name</TableHead>
//             <TableHead> Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>


//         <TableBody>
//           {
//             filterjobs.length === 0 ? <span>No Companies</span> : (
//               <>
//                 {
//                   filterjobs?.map((job => {
//                     return (
//                       <div key={job._id}>

//                         <TableCell>{job?.company?.name}</TableCell>
//                         <TableCell>{job?.title}</TableCell>
//                         <TableCell>{job.createdAt.split("T")[0]}</TableCell>
//                         <TableCell className="text-right cursor-pointer">
//                           <Popover>
//                             <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                             <PopoverContent className='w-32'>
//                               <div   onClick={()=>navigate(`/admin/companies/${job._id}`)}   className='flex items-center gap-2 w-fit cursor-pointer'>
//                                 <Edit2 className='w-4' />
//                                 <span>Edit</span>
//                               </div>

//                             </PopoverContent>
//                           </Popover>
//                         </TableCell>
//                       </div>
//                     )
//                   }))
//                 }

//               </>
//             )

//           }



//         </TableBody>
//       </Table>
//     </div>
//   )
// }

// export default AdminJobsTable


// import React, { useEffect, useState } from 'react'
// import {
//   Table,
//   TableBody,
//   TableCaption,
//   TableCell,
//   TableHead,
//   TableHeader,
//   TableRow,
// } from "@/components/ui/table"
// import { Popover, PopoverContent, PopoverTrigger } from '@radix-ui/react-popover'
// import { Edit2, MoreHorizontal } from 'lucide-react'
// import { useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'

// const AdminJobsTable = () => {
//   const navigate = useNavigate()
//   const { companies, searchCompanyByText } = useSelector(store => store.company)
//   const { allAdminJobs ,searchJobsByText } = useSelector(store => store.job)
//   const [filterjobs, setFilterJobs] = useState(allAdminJobs)

//   useEffect(() => {
//     const filteredJobs = allAdminJobs.length >= 0 && allAdminJobs.filter((job) => {
//       if (!searchJobsByText) {
//         return true;
//       };
//       return job?.title?.toLowerCase().includes(searchJobsByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobsByText.toLowerCase())
//     });
//     setFilterJobs(filteredJobs)
//   }, [allAdminJobs, searchJobsByText])

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recent posted jobs</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Company Name</TableHead>
//             <TableHead>Role</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {
//             filterjobs.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={4} className="text-center">No Companies</TableCell>
//               </TableRow>
//             ) : (
//               filterjobs.map((job) => (
//                 <TableRow key={job._id}>  {/* ✅ Changed from <div> to <TableRow> */}
//                   <TableCell>{job?.company?.name}</TableCell>
//                   <TableCell>{job?.title}</TableCell>
//                   <TableCell>{job.createdAt?.split("T")[0]}</TableCell>
//                   <TableCell className="text-right cursor-pointer">
//                     <Popover>
//                       <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                       <PopoverContent className='w-32'>
//                         <div onClick={() => navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
//                           <Edit2 className='w-4' />
//                           <span>Edit</span>
//                         </div>
//                       </PopoverContent>
//                     </Popover>
//                   </TableCell>
//                 </TableRow>
//               ))
//             )
//           }
//         </TableBody>
//       </Table>
//     </div>
//   )
// }

// export default AdminJobsTable


import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, Eye, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const AdminJobsTable = () => {
    const { allAdminJobs, searchJobByText } = useSelector(store => store.job);

    const [filterJobs, setFilterJobs] = useState(allAdminJobs);
    const navigate = useNavigate();

    useEffect(() => {
        console.log('called');
        const filteredJobs = allAdminJobs.filter((job) => {
            if (!searchJobByText) {
                return true;
            };
            return job?.title?.toLowerCase().includes(searchJobByText.toLowerCase()) || job?.company?.name.toLowerCase().includes(searchJobByText.toLowerCase());

        });
        setFilterJobs(filteredJobs);
    }, [allAdminJobs, searchJobByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent  posted jobs</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Company Name</TableHead>
                        <TableHead>Role</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterJobs?.map((job) => (
                            <tr>
                                <TableCell>{job?.company?.name}</TableCell>
                                <TableCell>{job?.title}</TableCell>
                                <TableCell>{job?.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={() => navigate(`/admin/companies/${job._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
                                            </div>

                                            <div onClick={() => navigate(`/admin/jobs/${job._id}/applicants`)} className='flex items-center w-fit gap-2 cursor-pointer mt-2'>
                                                <Eye className='w-4' />
                                                <span>Applicants</span>
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </TableCell>
                            </tr>

                        ))
                    }
                </TableBody>
            </Table>
        </div>
    )
}

export default AdminJobsTable
