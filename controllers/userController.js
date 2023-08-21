const asyncHandler = require("express-async-handler");

//@desc Get currentUser
// @route GET /api/v1/users/current
// @access priveate
const getCurrentUser = asyncHandler(async (req, res) => {
    res.status(200).json({message : "Current User"});
});


//@desc Register a new user
// @route POST /api/v1/users/register
// @access public
const registerUser = asyncHandler(async(req,res) => {
    res.status(200).json({message : "Register User"});
});


//@desc Login a user
// @route POST /api/v1/users/login
// @access public
const loginUser = asyncHandler(async(req, res) => {
    res.status(200).json({message : "Login User"})
});


module.exports = {  getCurrentUser,
                    registerUser,
                    loginUser }