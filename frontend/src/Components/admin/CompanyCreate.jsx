import React, { useState } from 'react'
import Navbar from '../shared/Navbar'
import { Label } from '../ui/label'
import { Input } from '../ui/input'
import { Button } from '../ui/button'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import {COMPANY_API_END_POINT} from '../../utilis/constant'
import { toast } from 'sonner'
import { useDispatch } from 'react-redux'
import { setSingleCompany } from '../../redux/companySlice'

const CompanyCreate = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const [companyName, setCompanyName] = useState()
     const registerNewCompany = async ()=>{
              try {
                 const res = await axios.post(`${COMPANY_API_END_POINT}/register`,{companyName},{
                    headers: {
                        'Content-Type': 'application/json'
                     },
                     withCredentials: true,

                  });
                  if(res?.data?.success){
                     dispatch(setSingleCompany(res.data.company))
                     toast.success(res.data.message)
                     toast.success(res.data.msg); 
                     const companyId = res?.data?.company?._id
                     navigate(`/admin/companies/${companyId}`)
                  }
                
                
              } catch (error) {
                 console.log(error.message);
                toast.success(res.data.message)
                
             }
 }

    
    
    
  return (
    <div>
      <Navbar/>
      <div className=" max-w-4xl mx-auto">
      <div className="my-10">
      <h1 className=' font-bold text-2xl'> Your Company Name</h1>
      <p className='text-gray-500'> Provide your Company Name you can change it Later</p>
      </div>
        
        <Label>Company Name</Label>
        <Input
            type="text"
            placeholder="Google,Microsoft,etc.."
            required
            className="border-2 border-gray-300 rounded-md p-3 mb-5"
            onChange = {(e)=>setCompanyName(e.target.value)}
  
        />
        <div className=" flex items-center gap-2 my-10">
            <Button  variant="outline"  onClick ={()=>navigate("/admin/companies")}  >Cancel</Button>
            <Button   onClick ={registerNewCompany}  >Continue</Button>
        </div>
      </div>



    </div>
  )
}

export default CompanyCreate
