import userModel from "../models/userModel.js"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
import validator from "validator"

//Login user
const loginUser = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await userModel.findOne({ email })
        if (!user) { return res.json({ msg: "User not found" }) }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) { return res.json({ success: false, message: "Invalid Credentials" }) }
        const token = createToken(user._id);
        res.json({ success: true, token })
    } catch (error) {
        console.log({ success: false, message: "Error Login" })
    }
}

const createToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET)
}

//Register user
const registerUser = async (req, res) => {
    const { name, password, email } = req.body;
    try {
        //checking if any user exist
        const exist = await userModel.findOne({ email })
        if (exist) {
            return res.json({ success: false, message: "User Already Exists" })
        }
        //Validating email format and strong pwd
        if (!validator.isEmail(email)) {
            return res.json({ success: false, message: "Invalid Email Format" })
        }
        if (password.length < 8) {
            return res.json({ success: false, message: "Please enter strong password" })
        }
        //Hashing password
        const salt = await bcrypt.genSalt(10)
        const hashedPassword = await bcrypt.hash(password, salt)
        //Creating new user
        const newUser = new userModel({
            name: name,
            email: email,
            password: hashedPassword
        })
        //Saving user to database
        const user = await newUser.save()
        //Creating token
        const token = createToken(user._id)
        //Sending token to client
        res.json({ success: true, message: "User Created Successfully", token })

    } catch (error) {
        console.log(error);
        res.json({ success: false, message: "Error" });
    }
}

export { loginUser, registerUser }