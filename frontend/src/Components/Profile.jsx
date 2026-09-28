import React, { useState } from 'react'
import Navbar from './shared/Navbar'
import { Avatar, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Badge } from "../Components/ui/badge"
import { Contact2, Mail, Pen } from 'lucide-react'
import { Label } from './ui/label'
import AppliedJobTable from './AppliedJobTable'
import UpdateProfileDialog from './UpdateProfileDialog'
import { useSelector } from 'react-redux'
// import store from '../redux/store'
import useGetAppliedJobs from '../hooks/useGetAppliedJob'


// const skills = ["Html", "Css", "Javascript", "Reactjs"];
const isResume = true;


const Profile = () => {
    useGetAppliedJobs()
    const [open, setOpen] = useState(false)
    const {user} = useSelector(store=>store.auth)
   
    return (
        <div>
            <Navbar />

            <div className="w-full max-w-4xl mx-auto bg-white border border-gray-200 rounded-2xl my-5 p-4 sm:p-6 md:p-8">
                <div className="flex flex-col sm:flex-row justify-between gap-5">
                    <div className="flex items-center gap-3 sm:gap-4 min-w-0">
                        <Avatar className="h-20 w-20 sm:h-24 sm:w-24 shrink-0">
                            <AvatarImage src={user?.profile?.profilePhoto} />
                        </Avatar>

                        <div className="min-w-0">
                            <h1 className='font-medium font-xl'>{user?.fullname}</h1>
                            <p className='text-sm text-gray-600 break-words'>{user?.profile?.bio}</p>
                        </div>
                    </div>

                    <Button onClick={() => setOpen(true)} className="text-right self-end sm:self-start" variant="outline">
                        <Pen />
                    </Button>
                </div>

                <div className="my-4">
                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 my-2">
                        <Mail className="shrink-0" />
                        <span className="break-all">{user?.email}</span>
                    </div>

                    <div className="flex items-start sm:items-center gap-3 sm:gap-4 my-2">
                        <Contact2 className="shrink-0" />
                        <span className="break-all">{user?.phoneNumber}</span>
                    </div>
                </div>
               
                <div className="my-5">
                    <h1>Skills</h1>
                    <div className="flex flex-wrap items-center gap-2">
                        {
                           user?.profile?.skills.length !== 0 ? user?.profile?.skills.map((item, index) => <Badge key={index}>{item}</Badge>) : <span>NA</span>
                        }
                    </div>
                </div>

                <div className="grid w-full max-w-sm items-center gap-1.5">
                    <Label className="text-md font-bold">Resume</Label>
                    {
                        isResume ? <a target='blank' href={user?.profile?.resume} className='text-blue-500 w-full hover:underline cursor-pointer break-all'>{user?.profile?.resumeOriginalName}</a> : <span>NA</span>
                    }
                </div>
            </div>

            <div className="w-full max-w-4xl mx-auto bg-white rounded-3xl px-4 sm:px-6 md:px-0">
                <h1 className='text-lg font-bold mr-5'>Applied Jobs</h1>
                {/* Applied job table */}
                <AppliedJobTable/>
            </div>

            <UpdateProfileDialog open={open} setOpen={setOpen} />
        </div>
    )
}

export default Profile
