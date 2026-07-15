import orderModel from "../models/orderModels.js";
import userModel from "../models/userModel.js";
import cartRouter from "../routes/cartRoute.js";

//Orders using COD method
const placeOrder = async (req, res) => {
    
    try {
        
        const { userId, items, amount, address} = req.body;

        const orderData = {
            userId,
            items,
            address,
            amount,
            paymentMethod: "COD", 
            payment: false,
            date: Date.now()
        }

        const newOrder = new orderModel(orderData)
        await newOrder.save()

        await userModel.findByIdAndUpdate(userId,{cartData:{}})

        res.json({success: true, message: "Order Placed"})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }

}

//Oreders using Stripe method
const placeOrderStripe = async (req, res) => {
    
}

//Orders using Razorpay method
const placeOrderRazorpay = async (req, res) => {
    
}

//All orders data for Admin Panel
const allOrders = async (req, res) => {
    try {
        
        const orders = await orderModel.find({})
        res.json({success:true, orders})

    } catch (error) {
         console.log(error)
        res.json({success: false, message: error.message})
    }
}

//User order data for frontent
const userOrders = async (req, res) => {
    try {
        
        const { userId} = req.body
        
        const orders = await orderModel.find({userId})
        res.json({success:true, orders})

    } catch (error) {
        console.log(error)
        res.json({success: false, message: error.message})
    }
}

//update order status from Admin Panel
const updateStatus = async (req, res) => {
    
}

export {placeOrder, placeOrderStripe, placeOrderRazorpay, allOrders, userOrders, updateStatus}