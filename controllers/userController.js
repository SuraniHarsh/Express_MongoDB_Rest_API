const asyncHandler = require("express-async-handler");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
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

    if (user) {
        res.status(201).json({message : "User Registered Successfully", User : {_id : user.id, email : user.email}});
    }else{
        res.status(400);
        throw new Error("User data is not valid");
    }

    } catch (error) {

        res.status(500).json({message : "Error in User Register", Error : error.message});

    }

});


//@desc Login a user
// @route POST /api/v1/users/login
// @access public
const loginUser = asyncHandler(async(req, res) => {
    try {
        const {email, password} = req.body;

    if (!email || !password) {
        res.status(400);
        throw new Error("All fildes are mandatory");
    } 
    
    const user = await User.findOne({email});

    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user : {
                username : user.username,
                email : user.email,
                _id : user.id,
            }
        },process.env.ACCESS_TOKEN_SECERT,
        {expiresIn : "1m"}
        );
        res.status(200).json({ accessToken });
    }else{
        res.status(401);
        throw new Error("email or password is not valid");
    }
    } catch (error) {
        res.status(400).json({Error : "Login User", message : error.message});
    }
});


module.exports = {  getCurrentUser,
                    registerUser,
                    loginUser }