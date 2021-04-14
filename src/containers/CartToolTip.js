import React, { useEffect, useState } from 'react'
import CartProductComponent from '../components/CartProductComponent'

function CartToolTip({cart, removeFunction, closeFunction}) {


    //FOR TOMMOROW
    //
    //YOU NEED TO UPDATE REDUX STATE NOT TO UPDATE STATE IN HERE YOU FUCKING MORON
    //


    // const [Cart, setCart] = useState([]);
    // useEffect(() => {
    //     setCart(cart)
    // },[])
    // const removeFunction = (product) => {
    //     const productToRemove = Cart.indexOf(product);
    //     let cartToUse = Cart;
    //     console.log(productToRemove)
    //     setCart(cartToUse.splice(productToRemove, 1));
    //     console.log("sa")
        
    // }

    const showCartProducts = () => {
        return cart.map((product) => {
            return <CartProductComponent removeFunction={() => removeFunction(product)} key={product.id} product={product}></CartProductComponent>
        })
    }

    return (
        <div className="cartToolTip">
            <button style={{width: "30px",marginLeft:"auto",height:"30px"}} onClick={closeFunction}>X</button>
            {showCartProducts()}
        </div>
    )
}

export default CartToolTip
