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
            // let copyCart = state.cart.filter(product => product);
            // console.log(state.cart,"BDBSABDSA");
            // action.product.number = null
            // copyCart = copyCart.map((product)=>{
            //     if(product.id!==action.product.id) { return product }
            //     return {...product, number: null}
            // })
            
            // console.log(copyCart,"copyCart")

            const ProductToAdd = state.cart.filter(product => product.id===action.product.id)
            

            
            if(ProductToAdd.length>0) {
                return {
                    ...state,
                    cart: state.cart.map((product) => {
                        
                        if(product.id === action.product.id) { return product.number >= 2 ? {...product, number: product.number+1} : {...product, number: 2}}else return product
                        /*verifica daca e produsul care ne trebuie */ /*proprietate de number nu exista si trebuie adaugata aici, initial cu 2, iar daca e mai mare sau egala cu 2 se adauga cate 1 */
                    })
                }
            } else{
                return {
                    ...state,
                    cart : state.cart.concat(action.product)
                }
            }
        case actionTypes.REMOVE_FROM_CART:
            
            console.log(action.product, 's')
            return {
                ...state,
                cart : state.cart.filter((p, i) => p.id!==action.product.id)

            }
            
        default:
            break;
    }
    return state;
    
}