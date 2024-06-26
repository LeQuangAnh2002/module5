import shop from "../api/shop";
import * as types from "../constants/ActionTypes";

const receiveProducts = products => ({
    type: types.RECEIVE_PRODUCTS,
    products
})
// Cách viết này dc gọi là "thunk action creator" và nó cho phép bạn viết 1 hàm trả về một hàm khác. Hàm bên trong sẽ dc gọi với dispatch làm tham số
export const getAllProducts = () => dispatch => {
    shop.getProducts(products => {
        dispatch(receiveProducts(products))
    })
}

//CART

const addToCartUnsafe = productId =>({
    type: types.ADD_TO_CART,
    productId
})
//Bạn có thể truy cập phần products của state trong action creator là vì combineReducers đã kết hợp các reducer cart và products thành một reducer gốc.
export const addToCart = productId => (dispatch,getState) =>{
    if(getState().products.byId[productId].inventory > 0){
        dispatch(addToCartUnsafe(productId))
    }
}

export const checkout = products => (dispatch, getState) => {
    const { cart } = getState()
    dispatch({
        type: types.CHECKOUT_REQUEST
    })
    shop.buyProducts(products, () => {
        dispatch({
            type: types.CHECKOUT_SUCCESS,
            cart
        })
        // Replace the line above with line below to rollback on failure:
        // dispatch({ type: types.CHECKOUT_FAILURE, cart })
    })
}
