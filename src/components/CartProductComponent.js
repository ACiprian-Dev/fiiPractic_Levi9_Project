import React from 'react'

function CartProductComponent({product, removeFunction}) {

    

    return (
        <div className="cartProductComponent">
            <img></img>
            <h3>{product.name}</h3>
            <button onClick={() => {removeFunction()}}>X</button>
        </div>
    )
}

export default CartProductComponent
