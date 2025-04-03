const Job = require("../models/job.model");

// admin post krega job
module.exports.postJob = async (req,res)=>{
    try {
        const { title, description, requirements, salary, location, jobType, experience, position, companyId } = req.body;
        const userId = req.id;

        if (!title || !description || !requirements || !salary || !location || !jobType || !experience || !position || !companyId) {
            return res.status(400).json({
                message: "All fields are required",
                success: false
            })
        };
        const job = await Job.create({
            title,
            description,
            requirements: requirements.split(","),
            salary: Number(salary),
            location,
            jobType,
            experienceLevel: experience,
            position,
            company: companyId,
            created_by: userId
        });
        return res.status(201).json({
            message: "New job created successfully.",
            job,
            success: true
        });
    } catch (error) {
        console.log(error);
    }
}

 





// student ke liye
module.exports.getAllJobs = async (req, res) => {
    try {
        const keyword = req.query.keyword || "";
        const query = {
            $or: [
                { title: { $regex: keyword, $options: "i" } },
                { description: { $regex: keyword, $options: "i" } },
            ],
        };

        const jobs = await Job.find(query)
            .populate({ path: "company" })
            .sort({ createdAt: -1 }); 

        if (jobs.length === 0) {
            return res.status(404).json({ message: "No jobs found." }); 
        }

        return res.status(200).json({
            success: true,
            jobs,
        });
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal server error." }); 
    }
};



module.exports.getJobById = async (req,res)=>{
    try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:"applications"
        })
        if(!job){
            return res.status(404).json({ message: 'Job not found.' });
        };
        return res.status(200).json({
            success:true,
            job,
        })
        
    } catch (error) {
        console.log(error);
        
    }
};
//  admin kitne job create kr rha  haiabhi tak
module.exports.getAdminJobs = async (req,res)=>{
    try {
        const adminId = req.id;
        const jobs = await Job.find({created_by: adminId}).populate({
            path:"company",
             options:{sort:{createdAt:-1}}
        })
        if(!jobs){
            return res.status(404).json({ message: 'No jobs found.' });
        };
        return res.status(200).json({
            success:true,
            jobs,
        })
        
    } catch (error) {
        console.log(error);
        
    }
};