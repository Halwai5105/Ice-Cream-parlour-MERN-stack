import userModel from "../models/userModel.js"
//add items to user cart
const addToCart = async (req,res)=>{ //2 parameters request,response.define async fun
    try {
        let userData = await userModel.findById(req.body.userId); //fetch data and define , uses user id in req
        let cartData = await userData.cartData; //retrives from fetched userdata, cart define
        if(!cartData[req.body.itemId])
        {
            cartData[req.body.itemId] = 1 //nothing it ads 1
        }
        else{
            cartData[req.body.itemId] = cartData[req.body.itemId] + 1 //increments
        }
        await userModel.findByIdAndUpdate(req.body.userId, {cartData});
        res.json({success:true, message:"ADDED To Cart"}); //updates the data
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"}); //sends error response
    }
}

//remove item from user cart
const removeFromCart = async (req,res)=>{
    try {
        let userData = await userModel.findById(req.body.userId);
        let cartData = await userData.cartData;
        if(cartData[req.body.itemId]>0){ //greater than 0
            cartData[req.body.itemId] = cartData[req.body.itemId] - 1; //decreases the quantity
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success:true,message:"Removed From Cart"})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
        
    }
}

//fetch user cart data 
const getCart = async (req,res) => {
    try {
        let userData = await userModel.findById(req.body.userId);
        if (!userData) {
            return res.json({ success: false, message: "User not found" });
        }
        let cartData = await userData.cartData;
        res.json({success:true,cartData})
    } catch (error) {
        console.log(error);
        res.json({success:false,message:"Error"})
    }
}

export {addToCart, removeFromCart, getCart}