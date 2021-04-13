import React from 'react';
import { connect } from 'react-redux';
import "../styles/Product.scss";
import {ADD_TO_CART} from '../store/actions';

function ProductComponent(props) {
    return (
        <section className="productContainer">
            <h3>{props.product.name}</h3>
            <img src={`${props.product.image}`} />
            <p>Price: <b>{props.product.price}$</b></p>
            <p>Stock: <b>{props.product.stock}</b></p>
            <button onClick={() => props.onAddProduct(props.product)}>Add to Cart</button>
        </section>
    )
}

const mapStateToProps = (state) => {
    return {
        cart: state.cart,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        onAddProduct: (product) => dispatch({type: ADD_TO_CART, product: product})
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(ProductComponent)

