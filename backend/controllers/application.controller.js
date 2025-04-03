const Application = require("../models/application.model");
const Job = require("../models/job.model");


module.exports.applyJob = async (req, res) => {  
    try {
        const userId = req.id;
        const jobId = req.params.id;

        if (!jobId) {
            return res.status(400).json({ message: "Invalid job ID" });
        }

        // Check if the user has already applied to this job
        const existingApplication = await Application.findOne({ job: jobId, applicant: userId });
        if (existingApplication) {
            return res.status(400).json({ message: "You have already applied to this job" });
        }

        // Check if the job exists
        const job = await Job.findById(jobId);
        if (!job) {
            return res.status(404).json({ message: "Job not found" });
        }

        // Create a new application
        const newApplication = await Application.create({
            job: jobId,
            applicant: userId
        });

        job.applications.push(newApplication._id);
        await job.save();

        return res.status(201).json({
            message: "Application submitted successfully",
            success: true
        });

    } catch (error) {
        console.log(error.message);
        return res.status(500).json({ message: "Internal Server Error" });
    }
};


module.exports.getAppliedJobs = async (req,res)=>{
    try {
        const userId = req.id;
        const application = await Application.find({applicant:userId}).sort({createdAt:-1}).populate({
            path:'job',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'company',
                options:{sort:{createdAt:-1}},
            }
        });
        if(!application) {
            return res.status(404).json({message: "No applications found"});
        };
        return res.json({
             application,
            success: true
        })
        
    } catch (error) {
     console.log(error.message);
        
    }
};
 
// admin dekhega ki kitna user apply kiya hai
module.exports.getApplicants = async (req,res)=>{
     try {
        const jobId = req.params.id;
        const job = await Job.findById(jobId).populate({
            path:'applications',
            options:{sort:{createdAt:-1}},
            populate:{
                path:'applicant',
                // options:{sort:{createdAt:-1}},
            }

        });
        if(!job) {
            return res.status(404).json({message: "Job not found"});
        }
        return res.status(200).json({
            job,
            success: true
        })
        
     } catch (error) {
        console.log(error);
        
     }
}

module.exports.updateStatus = async (req,res)=>{
    try {
        const {status} = req.body;
        const applicationId = req.params.id;
        if(!status){
            return res.status(400).json({message: "Please provide status"});
        };
        // find the application by applicantion id
        const application = await Application.findOne({_id:applicationId})
        if(!application){
            return res.status(404).json({message: "Application not found"});
        };
        // update the status
        application.status = status.toLowerCase();
        await application.save();
        return res.status(200).json({
            message: "Application status updated successfully",
            success: true
        })
        
    } catch (error) {
        console.log(error);
        
    }
};