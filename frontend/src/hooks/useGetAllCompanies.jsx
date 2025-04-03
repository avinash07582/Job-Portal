import axios from 'axios';
import { useEffect } from 'react';

import { useDispatch } from 'react-redux';

import {COMPANY_API_END_POINT} from '../utilis/constant'
import { setCompanies } from '../redux/companySlice';

const useGetAllCompanies = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        const fetchCompanies = async () => {
            try {
                const res = await axios.get(`${COMPANY_API_END_POINT}/get/`, { withCredentials: true });
                if (res.data.success) {
                    dispatch(setCompanies(res.data.companies));
                }
            } catch (error) {
                console.log("Error fetching jobs:", error.message);
            }
        };

        fetchCompanies(); 

    }, []);
};

export default useGetAllCompanies;
