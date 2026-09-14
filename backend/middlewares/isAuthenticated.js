// const jwt = require("jsonwebtoken");

// const isAuthenticated = async (req, res, next) => {
//     try {
//         const token = req.cookies.token;

//         if (!token) {
//             return res.status(401).json({
//                 error: "You are not authenticated"
//             });
//         }

//         const decode = jwt.verify(
//             token,
//             process.env.JWT_SECRET
//         );

//         req.id = decode.userId;

//         next();

//     } catch (error) {
//         console.log("Auth Error:", error);

//         return res.status(401).json({
//             error: "Invalid or expired token"
//         });
//     }
// };

// module.exports = isAuthenticated;

const isAuthenticated = async (req, res, next) => {
    try {

        console.log("COOKIES:", req.cookies);
        console.log("TOKEN:", req.cookies.token);

        const token = req.cookies.token;

        if (!token) {
            return res.status(401).json({
                error: "You are not authenticated"
            });
        }

        const decode = jwt.verify(token, process.env.JWT_SECRET);

        req.id = decode.userId;

        next();

    } catch (error) {
        console.log("Auth Error:", error);

        return res.status(401).json({
            error: "Invalid or expired token"
        });
    }
};
