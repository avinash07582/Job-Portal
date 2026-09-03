const express = require('express');
const cookieParser = require('cookie-parser');

const cors = require('cors');
const dotenv = require('dotenv');
const connectDB =require("./utils/db")
const userRoute = require("./routes/user.route")
const companyRoute = require("./routes/company.route")
const jobRoute = require("./routes/job.route")
const applicationRoute = require("./routes/application.route")
const path = require("path")

dotenv.config({});

const app = express();
const _dirname = path.resolve()
 

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended:true }));
app.use(cookieParser());
const corsOptions = {
    origin: "http://localhost:5176", // Frontend URL
    credentials: true
};

app.use(cors(corsOptions)); // ✅ Correct usage


const PORT = process.env.PORT || 3000;
// all api's will there

app.use("/api/v1/user", userRoute);
app.use("/api/v1/company", companyRoute);
app.use("/api/v1/job", jobRoute);
app.use("/api/v1/application", applicationRoute);

app.use (express.static(path.join(_dirname,"/frontend/dist")))
app.get('*',(req,res)=>{
    res.sendFile(path.resolve(_dirname,"frontend","dist","index.html"))
})

app.listen(PORT, () => {
    connectDB();
    console.log(`Server is running on port ${PORT}`);
});

