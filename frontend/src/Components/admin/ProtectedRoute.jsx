// import { useEffect } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import store from "../../redux/store";

// const ProtectedRoute = ({children}) => {
//     // const {user} = useSelector(store=>store.auth);
//     const {user}  = useSelector(store=>store.auth);

//     const navigate = useNavigate();

//     useEffect(()=>{
//         if(user === null || user.role !== 'recruiter'){
//             navigate("/");
//         }
//     },[]);

//     return (
//         <>
//         {children}
//         </>
//     )
// };
// export default ProtectedRoute;
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
    const { user } = useSelector((state) => state.auth);  // ✅ Corrected state access
    const navigate = useNavigate();

    useEffect(() => {
        if (!user || user.role !== "recruiter") {
            navigate("/");
        }
    }, [user, navigate]);  // ✅ Added dependencies

    return user && user.role === "recruiter" ? children : null;
};

export default ProtectedRoute;
