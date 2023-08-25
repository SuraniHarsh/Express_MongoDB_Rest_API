const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel");

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

    try {

    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fildes are mandatory");
    }

    const userExists = await User.findOne({email});
    if (userExists) {
        res.status(400);
        throw new Error("User already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = await User.create({
        email,
        username,
        password: hashedPassword,
    });

    res.status(200).json({user : "User Registered Successfully", user : user})

    } catch (error) {

        res.status(500).json({message : "Error in User Register", Error : error.message});

    }

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