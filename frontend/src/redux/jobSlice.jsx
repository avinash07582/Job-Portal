   import {createSlice} from '@reduxjs/toolkit'

   const jobSlice = createSlice({
    name: 'job',
    initialState: {
        alljobs: [],
        allAdminJobs: [],
        singlejob:null,
        searchJobByText:"",
        allAppliedJobs: [],
        searchedQuery:"",
    },
    reducers: {
        // actions
        setAllJobs:(state,action)=>{
            state.alljobs = action.payload;
            console.log("Redux Payload:", action.payload); 
            
        },
        setSingleJob:(state,action)=>{
            state.singlejob = action.payload;
            console.log("Redux Payload:", action.payload); 
        },
        setAllAdminJobs:(state,action)=>{
            state.allAdminJobs = action.payload;
            console.log("Redux Payload:", action.payload); 
        },
        setSearchJobByText:(state,action)=>{
            state.searchJobByText = action.payload;
            console.log("Redux Payload:", action.payload); 
        },
        setAllAppliedJobs:(state,action)=>{
            state.allAppliedJobs = action.payload;
            console.log("Redux Payload:", action.payload); 
        },
        // 
        setSearchedQuery: (state, action) => {
            console.log("Action Payload:", action.payload);
            state.searchedQuery = action.payload;
            console.log("Updated SearchedQuery:", state.searchedQuery);
        }
      
    },
   });
   export const {setAllJobs, setSingleJob ,setAllAdminJobs,setSearchJobByText,setAllAppliedJobs,setSearchedQuery} = jobSlice.actions;
   export default jobSlice.reducer;
