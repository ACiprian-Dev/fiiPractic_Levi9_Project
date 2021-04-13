import * as actionTypes from './actions'

const initialState = {
    counter : 0,
    users : [],
    posts : [],
    cart: [],
    
}

export const reducer = (state = initialState, action) => {

    switch (action.type) {
        case actionTypes.INCREMENT:
            return {
                ...state,
                counter : state.counter + 1
            }
            
        case actionTypes.DECREMENT:
            return {
                ...state,
                counter : state.counter - action.value
            }
        case actionTypes.GETUSERS:
            return {
                ...state,
                users : action.users
            }
        case actionTypes.GETPOSTS:
            return {
                ...state,
                posts : action.posts
            }
        case actionTypes.ADD_TO_CART:
            return {
                ...state,
                cart : state.cart.concat(action.product)
            }
        case actionTypes.REMOVE_FROM_CART:
            return {
                ...state,
                cart : state.cart.splice(state.cart.indexOf(action.product), 1)
                
            }
        default:
            break;
    }
    return state;
    
}