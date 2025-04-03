
import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "../redux/jobSlice";
import { motion } from "framer-motion";
import { MapPin, Briefcase, DollarSign } from "lucide-react";

// Define filter categories with icons
const filterData = [
  {
    filterType: "Location",
    icon: <MapPin className="h-5 w-5 text-purple-600" />,
    array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai","Noida"],
  },
  {
    filterType: "Industry",
    icon: <Briefcase className="h-5 w-5 text-blue-600" />,
    array: ["Frontend Developer", "Backend Developer", "FullStack Developer"],
  },
  {
    filterType: "Salary",
    icon: <DollarSign className="h-5 w-5 text-green-600" />,
    array: ["0-40k", "42-1lakh", "1lakh to 5lakh"],
  },
];

const FilterCard = () => {
  const [selectedValue, setSelectedValue] = useState("");
  const dispatch = useDispatch();

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="w-full bg-white shadow-lg rounded-lg p-5"
    >
      {/* Filter Heading */}
      <motion.h1
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        className="font-bold text-xl text-gray-800 flex items-center gap-2"
      >
        🎯 Filter Jobs
      </motion.h1>

      <hr className="mt-3 mb-4 border-gray-300" />

      {/* Filter Options */}
      <RadioGroup value={selectedValue} onValueChange={changeHandler}>
        {filterData.map((data, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="mb-4"
          >
            {/* Category Title with Icon */}
            <h2 className="font-semibold text-lg flex items-center gap-2 text-gray-700">
              {data.icon} {data.filterType}
            </h2>

            {/* Filter Options */}
            {data.array.map((item, idx) => {
              const itemId = `id${index}-${idx}`;
              return (
                <motion.div
                  key={itemId}
                  whileHover={{ scale: 1.05 }}
                  className="flex items-center space-x-3 my-2 p-2 rounded-lg hover:bg-gray-100 transition"
                >
                  <RadioGroupItem value={item} id={itemId} />
                  <Label htmlFor={itemId} className="cursor-pointer text-gray-700">
                    {item}
                  </Label>
                </motion.div>
              );
            })}
          </motion.div>
        ))}
      </RadioGroup>
    </motion.div>
  );
};

export default FilterCard;



// import React, { useEffect, useState } from 'react'
// import { RadioGroup, RadioGroupItem } from './ui/radio-group'
// import { Label } from './ui/label'
// import { useDispatch } from 'react-redux'
// import { setSearchedQuery } from '../redux/jobSlice'

// const fitlerData = [
//     {
//         fitlerType: "Location",
//         array: ["Delhi NCR", "Bangalore", "Hyderabad", "Pune", "Mumbai"]
//     },
//     {
//         fitlerType: "Industry",
//         array: ["Frontend Developer", "Backend Developer", "FullStack Developer"]
//     },
//     {
//         fitlerType: "Salary",
//         array: ["0-40k", "42-1lakh", "1lakh to 5lakh"]
//     },
// ]

// const FilterCard = () => {
//     // const [selectedValue, setSelectedValue] = useState('');
//     // const dispatch = useDispatch();
//     // const changeHandler = (value) => {
//     //     setSelectedValue(value);
//     // }
//     // useEffect(()=>{
//     //     dispatch(setSearchedQuery(selectedValue));
//     // },[selectedValue]);
//     return (
//         <div className='w-full bg-white p-3 rounded-md'>
//             <h1 className='font-bold text-lg'>Filter Jobs</h1>
//             <hr className='mt-3' />
//             <RadioGroup >
//                 {
//                     fitlerData.map((data, index) => (
//                         <div>
//                             <h1 className='font-bold text-lg'>{data.fitlerType}</h1>
//                             {
//                                 data.array.map((item, index) => {
                                    
//                                     return (
//                                         <div className='flex items-center space-x-2 my-2'>
//                                             <RadioGroupItem value={item}  />
//                                             <Label >{item}</Label>
//                                         </div>
//                                     )
//                                 })
//                             }
//                         </div>
//                     ))
//                 }
//             </RadioGroup>
//         </div>
//     )
// }

// export default FilterCard