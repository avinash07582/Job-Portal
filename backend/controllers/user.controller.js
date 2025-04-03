const User = require("../models/user.model");
const bcrypt = require("bcryptjs")
const jwt = require("jsonwebtoken");
const getDataUri = require("../utils/datauri");
const cloudinary = require("../utils/cloudinary");




module.exports.register = async (req, res) => {
    try {
        const { fullname, email, phoneNumber, password, role } = req.body;
        
        
        if (!fullname || !email || !phoneNumber || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        };
   const file = req.file;
   const fileUri = getDataUri(file);
   const cloudResponse = await cloudinary.uploader.upload(fileUri.content)

        const user = await User.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already exists' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        await User.create({
            fullname,
            email,
            phoneNumber,
            password: hashedPassword,
            role,
            profile:{
                profilePhoto: cloudResponse.secure_url,
            }

        })
        return res.status(201).json({
            message: 'User registered successfully',
            success:true,
        })

    } catch (error) {
        console.log(error);


    }
};

module.exports.login = async (req, res) => {
    try {
        const { email, password, role } = req.body;
        if (!email || !password || !role) {
            return res.status(400).json({ message: 'All fields are required' });
        };
        let user = await User.findOne({ email });
        if (!user) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }
        const isPasswordMatch = await bcrypt.compare(password, user.password);
        if (!isPasswordMatch) {
            return res.status(401).json({ message: 'Incorrect email or password' });
        }
        // check role is correct or not
        if( role !== user.role){
            return res.status(403).json({ message: 'Invalid role or Account does not exist with current role ' });
        };
        const tokenData = {
            userId:user._id
        }
        const token = jwt.sign(tokenData, process.env.JWT_SECRET, { expiresIn: '1d' });
        user = {
            _id: user._id,
            fullname: user.fullname,
            email: user.email,
            phoneNumber: user.phoneNumber,
            role: user.role,
            profile: user.profile
        }


        return res.status(200).cookie("token", token,{maxAge:1*24*60*60*1000,httpOnly:true, sameSite:'strict'}).json({
            message:`Welcome Back ${user.fullname}`,
            user,
            success:true,
        });

      




    } catch (error) {
        console.log(error);


    }
};
module.exports.logout = async (req, res) => {
    try {
        return res.status(200).cookie("token","",{maxAge:0}).json({
            message: "Logged Out Successfully",
            success:true,
        })
        
    } catch (error) {
        console.log(error);
        
    }
}


module.exports.updateProfile = async (req, res) => {
    try {
        console.log("Received file:", req.file);

        const { fullname, email, phoneNumber, bio, skills } = req.body;
        const file = req.file;

        // Ensure the user exists
        const userId = req.id;
        let user = await User.findById(userId);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        // Handle file upload (Resume)
        if (file) {
            const fileUri = getDataUri(file);
            console.log("Generated File URI:", fileUri);

            const cloudResponse = await cloudinary.uploader.upload(fileUri.content);
            user.profile.resume = cloudResponse.secure_url;
            user.profile.resumeOriginalName = file.originalname;
        }

        // Handle skills
        let skillsArray;
        if (skills) {
            skillsArray = skills.split(",");
            user.profile.skills = skillsArray;
        }

        // Update other fields
        if (fullname) user.fullname = fullname;
        if (email) user.email = email;
        if (phoneNumber) user.phoneNumber = phoneNumber;
        if (bio) user.profile.bio = bio;

        // Save user
        await user.save();

        return res.status(200).json({
            message: "Profile updated successfully.",
            user,
            success: true,
        });

    } catch (error) {
        console.error("Error updating profile:", error);
        return res.status(500).json({ message: "Internal server error", error });
    }
};
