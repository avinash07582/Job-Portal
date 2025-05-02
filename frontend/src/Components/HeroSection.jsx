// import { Search } from 'lucide-react'
// import React, { useState } from 'react'
// import { Button } from './ui/button'
// import { useDispatch } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '../redux/jobSlice';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();

//     const searchJobHandler = () => {
//         dispatch(setSearchedQuery(query));
//         navigate("/browse");
//     }
//   return (
//     <div className=' text-center mt-4'>
//     <div className=" flex flex-col gap-5 my-10">
//     <span className=' mx- auto px-4 py-2 roundeed-full bg-gray-100 text-[#972081] font-medium'> No.1 Job Hunt Website</span>
//     <h1 className='text-5xl font-bold'>Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Jobs</span></h1>
//     <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>
//     <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream jobs'
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full'

//                     />
//                      <Button   onClick={searchJobHandler}   className="rounded-r-full bg-[#6A38C2]">
//                         <Search
//                          className='h-5 w-5' />
//                     </Button>


//     </div>
//     </div>
    
    
      
//     </div>
//   )
// }

// export default HeroSection
// import { Search } from 'lucide-react';
// import React, { useState } from 'react';
// import { Button } from './ui/button';
// import { useDispatch, useSelector } from 'react-redux';
// import { useNavigate } from 'react-router-dom';
// import { setSearchedQuery } from '../redux/jobSlice';

// const HeroSection = () => {
//     const [query, setQuery] = useState("");
//     const dispatch = useDispatch();
//     const navigate = useNavigate();
    
//     // ✅ Debug: Check if component is rendering
//     console.log("✅ HeroSection Component Rendered");

//     // ✅ Debug: Check Redux State
//     const searchedQuery = useSelector((state) => state.job.SearchedQuery);
//     console.log("🟢 Redux State (SearchedQuery):", searchedQuery);

//     const searchJobHandler = () => {
//         console.log("🔍 Search Button Clicked! Query:", query);
        
//         if (!query.trim()) {
//             console.warn("⚠️ Empty search query!");
//             return;
//         }

//         dispatch(setSearchedQuery(query));
//         console.log("✅ Dispatch successful! Updated Redux SearchedQuery:", query);
        
//         navigate("/browse");
//     };

//     return (
//         <div className='text-center mt-4'>
//             <div className="flex flex-col gap-5 my-10">
//                 <span className='mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#972081] font-medium'>
//                     No.1 Job Hunt Website
//                 </span>
                
//                 <h1 className='text-5xl font-bold'>
//                     Search, Apply & <br /> Get Your <span className='text-[#6A38C2]'>Dream Job</span>
//                 </h1>
                
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid aspernatur temporibus nihil tempora dolor!</p>

//                 {/* Search Bar */}
//                 <div className='flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto'>
//                     <input
//                         type="text"
//                         placeholder='Find your dream job'
//                         value={query}
//                         onChange={(e) => setQuery(e.target.value)}
//                         className='outline-none border-none w-full px-2 py-2'
//                     />
                    
//                     <Button onClick={searchJobHandler} className="rounded-r-full bg-[#6A38C2] hover:bg-[#5a28a0] transition">
//                         <Search className='h-5 w-5' />
//                     </Button>
//                 </div>
//             </div>
//         </div>
//     );
// };

// export default HeroSection;


// import React, { useState } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { setSearchedQuery } from "../redux/jobSlice";
// import { Button } from ".";
// import { Search, Briefcase, Sparkles, Rocket } from "lucide-react";
// import { motion } from "framer-motion";
// import { Search } from 'lucide-react';
 import React, { useState } from 'react';
 import { Button } from './ui/button';
 import { useDispatch, useSelector } from 'react-redux';
 import { useNavigate } from 'react-router-dom';
 import { setSearchedQuery } from '../redux/jobSlice';
 import { Search, Briefcase, Sparkles, Rocket } from "lucide-react";
  import { motion } from "framer-motion";

const HeroSection = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch();
    const navigate = useNavigate();

    // ✅ Debugging
    console.log("✅ HeroSection Component Rendered");

    const searchedQuery = useSelector((state) => state.job.SearchedQuery);
    console.log("🟢 Redux State (SearchedQuery):", searchedQuery);

    const searchJobHandler = () => {
        console.log("🔍 Search Button Clicked! Query:", query);

        if (!query.trim()) {
            console.warn("⚠️ Empty search query!");
            return;
        }

        dispatch(setSearchedQuery(query));
        console.log("✅ Dispatch successful! Updated Redux SearchedQuery:", query);

        navigate("/browse");
    };

    return (
        <motion.div 
            className="text-center mt-4 px-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
        >
            <motion.div 
                className="flex flex-col gap-5 my-10"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.3 }}
            >
                {/* Badge */}
                <motion.span 
                    className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#972081] font-medium flex items-center gap-2"
                    whileHover={{ scale: 1.1 }}
                >
                    <Sparkles className="h-5 w-5 text-[#972081]" />
                    No.1 Job Hunt Website
                </motion.span>

                {/* Title */}
                <h1 className="text-5xl font-bold leading-tight flex flex-col items-center text-center">
    Search, Apply & <br />
    Get Your <span className="text-[#6A38C2] flex items-center gap-2 justify-center">
        Dream Job <Rocket className="h-8 w-8 text-[#6A38C2]" />
    </span>
</h1>

                {/* Subtitle */}
                <p className="text-gray-600 text-lg max-w-2xl mx-auto">
                    Find opportunities that match your skills and ambition. Let’s land you the perfect job today!
                </p>

                {/* Search Bar */}
                <motion.div 
                    className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto bg-white"
                    whileHover={{ scale: 1.02 }}
                >
                    <Briefcase className="h-6 w-6 text-gray-400" />
                    <input
                        type="text"
                        placeholder="Find your dream job..."
                        value={query}
                        onChange={(e) => setQuery(e.target.value)}
                        className="outline-none border-none w-full px-2 py-2 text-lg"
                    />
                    <Button 
                        onClick={searchJobHandler} 
                        className="rounded-r-full bg-[#6A38C2] hover:bg-[#5a28a0] transition flex items-center gap-2 px-4 py-2"
                    >
                        <Search className="h-5 w-5" />
                        Search
                    </Button>
                </motion.div>
            </motion.div>
        </motion.div>
    );
};

export default HeroSection;

