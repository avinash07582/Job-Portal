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

// const CompaniesTable = () => {
//   const navigate = useNavigate()
//   const { companies,searchCompanyByText } = useSelector(store => store.company)

//   const [filterCompany, setFilterCompany] = useState(companies)

//   useEffect(()=>{
//     const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
//       if(!searchCompanyByText){
//         return true;
//       };
//       return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase())

//     });
//     setFilterCompany(filteredCompany)

//   },[companies,searchCompanyByText])

//   return (
//     <div>
//       <Table>
//         <TableCaption> A list of your recent registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead> Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>


//         <TableBody>
//           {
//             filterCompany.length === 0 ? <span>No Companies</span> : (
//               <>
//                 {
//                   filterCompany?.map((company => {
//                     return (
//                       <div key={company._id}>
//                         <TableCell>
//                           <Avatar>
//                             <AvatarImage
//                               src= {company.logo}
//                             />


//                           </Avatar>
//                         </TableCell>
//                         <TableCell>{company.name}</TableCell>
//                         <TableCell>{company.createdAt.split("T")[0]}</TableCell>
//                         <TableCell className="text-right cursor-pointer">
//                           <Popover>
//                             <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                             <PopoverContent className='w-32'>
//                               <div   onClick={()=>navigate(`/admin/companies/${company._id}`)}   className='flex items-center gap-2 w-fit cursor-pointer'>
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

// export default CompaniesTable
import React, { useEffect, useState } from 'react'
import { Table, TableBody, TableCaption, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'
import { Avatar, AvatarImage } from '../ui/avatar'
import { Popover, PopoverContent, PopoverTrigger } from '../ui/popover'
import { Edit2, MoreHorizontal } from 'lucide-react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const CompaniesTable = () => {
    const { companies, searchCompanyByText } = useSelector(store => store.company);
    const [filterCompany, setFilterCompany] = useState(companies);
    const navigate = useNavigate();
    useEffect(()=>{
        const filteredCompany = companies.length >= 0 && companies.filter((company)=>{
            if(!searchCompanyByText){
                return true
            };
            return company?.name?.toLowerCase().includes(searchCompanyByText.toLowerCase());

        });
        setFilterCompany(filteredCompany);
    },[companies,searchCompanyByText])
    return (
        <div>
            <Table>
                <TableCaption>A list of your recent registered companies</TableCaption>
                <TableHeader>
                    <TableRow>
                        <TableHead>Logo</TableHead>
                        <TableHead>Name</TableHead>
                        <TableHead>Date</TableHead>
                        <TableHead className="text-right">Action</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {
                        filterCompany?.map((company) => (
                            <tr>
                                <TableCell>
                                    <Avatar>
                                        <AvatarImage src={company.logo}/>
                                    </Avatar>
                                </TableCell>
                                <TableCell>{company.name}</TableCell>
                                <TableCell>{company.createdAt.split("T")[0]}</TableCell>
                                <TableCell className="text-right cursor-pointer">
                                    <Popover>
                                        <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
                                        <PopoverContent className="w-32">
                                            <div onClick={()=> navigate(`/admin/companies/${company._id}`)} className='flex items-center gap-2 w-fit cursor-pointer'>
                                                <Edit2 className='w-4' />
                                                <span>Edit</span>
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

export default CompaniesTable


// import React from 'react'
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

// const CompaniesTable = () => {
//   // Ensure companies is always an array
//   const { companies = [] } = useSelector(store => store.company)

//   return (
//     <div>
//       <Table>
//         <TableCaption>A list of your recently registered companies</TableCaption>
//         <TableHeader>
//           <TableRow>
//             <TableHead>Logo</TableHead>
//             <TableHead>Name</TableHead>
//             <TableHead>Date</TableHead>
//             <TableHead className="text-right">Action</TableHead>
//           </TableRow>
//         </TableHeader>

//         <TableBody>
//           {
//             companies.length === 0 ? (
//               <TableRow>
//                 <TableCell colSpan={4} className="text-center">No Companies</TableCell>
//               </TableRow>
//             ) : (
//               companies.map((company) => (
//                 <TableRow key={company._id}>
//                   <TableCell>
//                     <Avatar>
//                       <AvatarImage
//                         src="https://plus.unsplash.com/premium_photo-1674479813017-312c6fe99786?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8OXx8Y29tcGFueSUyMGxvZ28lMjByb3VuZGVkfGVufDB8fDB8fHww"
//                         alt="Company Logo"
//                       />
//                     </Avatar>
//                   </TableCell>
//                   <TableCell>{company.name}</TableCell>
//                   <TableCell>{company.createdAt?.split("T")[0]}</TableCell>
//                   <TableCell className="text-right cursor-pointer">
//                     <Popover>
//                       <PopoverTrigger><MoreHorizontal /></PopoverTrigger>
//                       <PopoverContent className='w-32'>
//                         <div className='flex items-center gap-2 w-fit cursor-pointer'>
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

// export default CompaniesTable

