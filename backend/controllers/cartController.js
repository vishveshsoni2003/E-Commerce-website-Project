
import userModel from '../models/userModel.js'

//add products to user cart
export const addToCart = async (req, res) => {
    try {
        
        const { userId, itemId, size} = req.body
        console.log('Add to cart - userId:', userId, 'itemId:', itemId, 'size:', size)

        if (!userId) {
            console.log('userId is missing')
            return res.json({success: false, message: 'userId is missing'})
        }

        const userData = await userModel.findById(userId)
        console.log('User data found:', !!userData)
        
        if (!userData) {
            console.log('User not found')
            return res.json({success: false, message: 'User not found'})
        }
        
        let cartData = structuredClone(userData.cartData || {})
        console.log('Current cartData before:', cartData)

        if (cartData[itemId]) {
            if(cartData[itemId][size]){
                cartData[itemId][size] += 1
            }
            else{
                cartData[itemId][size] = 1
            }
        } else {
            cartData[itemId] = {}
            cartData[itemId][size] = 1
        }
        
        console.log('Updated cartData after:', cartData)
        userData.cartData = cartData
        userData.markModified('cartData')  // Tell mongoose that nested object changed
        await userData.save()
        console.log('Cart updated and saved to database successfully')

        res.json({success:true, message: "Added to Cart"})

    } catch (error) {
        console.log('Error in addToCart:', error);
        res.json({success: false, message: error.message})
        
    }
}

//update user cart
export const updateCart = async (req, res) => {
    try {
        
        const {userId, itemId, size, quantity} = req.body
        console.log('Update cart - userId:', userId, 'itemId:', itemId, 'size:', size, 'quantity:', quantity)
        
        if (!userId) {
            console.log('userId is missing')
            return res.json({success: false, message: 'userId is missing'})
        }
        
        const userData = await userModel.findById(userId)
        console.log('User data found:', !!userData)
        
        if (!userData) {
            console.log('User not found')
            return res.json({success: false, message: 'User not found'})
        }
        
        let cartData = structuredClone(userData.cartData || {})
        console.log('Current cartData:', cartData)

        if (!cartData[itemId]) {
            cartData[itemId] = {}
        }

        if (quantity === 0) {
            // Remove the item if quantity is 0
            delete cartData[itemId][size]
            // If no sizes left for this item, remove the item
            if (Object.keys(cartData[itemId]).length === 0) {
                delete cartData[itemId]
            }
        } else {
            cartData[itemId][size] = quantity
        }
        
        console.log('Updated cartData:', cartData)

        userData.cartData = cartData
        userData.markModified('cartData')  // Tell mongoose that nested object changed
        await userData.save()
        console.log('Cart updated and saved to database successfully')

        res.json({success:true, message: "Cart Updated"})
        

    } catch (error) {
        
        console.log('Error in updateCart:', error);
        res.json({success: false, message: error.message})

    }
}

//get user cart data
export const getUserCart = async (req, res) => {
    try {
        
        const {userId} = req.body
        console.log('Get cart - userId:', userId)
        
        if (!userId) {
            console.log('userId is missing')
            return res.json({success: false, message: 'userId is missing'})
        }
        
        const userData = await userModel.findById(userId)
        console.log('User data found:', !!userData)
        
        if (!userData) {
            console.log('User not found')
            return res.json({success: false, message: 'User not found'})
        }
        
        let cartData = userData.cartData || {}
        console.log('Retrieved cartData:', cartData)

        res.json({success: true, cartData})

    } catch (error) {

        console.log('Error in getUserCart:', error);
        res.json({success: false, message: error.message})
        
    }
}


// export default {addToCart, updateCart, getUserCart};