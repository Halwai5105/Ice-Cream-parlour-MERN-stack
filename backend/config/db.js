import mongoose from "mongoose"

export const connectDB = async() => {
    await mongoose.connect('#CONNECTION STRING').then(()=> console.log("DB connected"));
}