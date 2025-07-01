const Product = require("../models/productModel");

const getProducts = async(req, res) =>{
    try {
        const allProducts = await Product.find();
        if(!allProducts){
            res.json({
                message:"There is no products"
            })
        }

        res.status(200).json({
            success:true,
            products:allProducts,
        })
    } catch (error) {
        res.status(500).json({
            success: false,
            message:"Internal Server Error"
        })
    }
}

module.exports = {getProducts}