 import {ADD_TO_CART,CHECKOUT_REQUEST,CHECKOUT_FAILURE} from "../constants/ActionTypes";

const initialState = {
    addedIds: [],
    quantityById : {}
}
//state.indexOf(action.productId) sẽ trả về vị trí của action.productId trong mảng state. Nếu action.productId không có trong mảng, thì indexOf sẽ trả về -1.
// Sau đó, state.indexOf(action.productId) !== -1 sẽ kiểm tra xem giá trị trả về có khác -1 hay không. Nếu khác -1, có nghĩa là action.productId đã có trong mảng state.
// Nếu action.productId đã có trong mảng state (tức là sản phẩm đã được thêm vào giỏ hàng trước đó), thì trả về state hiện tại mà không thay đổi gì.
// Nếu action.productId chưa có trong mảng state, thì mới thực hiện việc thêm sản phẩm vào giỏ hàng bằng cách trả về một mảng mới với action.productId được thêm vào.
const addedIds = (state = initialState.addedIds,action) =>{
    switch (action.type) {
        case ADD_TO_CART:
            if(state.indexOf(action.productId) !== -1){
                return state
            }
            return [...state,action.productId]
        default:
            return state
    }
}
//Reducer này quản lý một object quantityById trong state, lưu trữ số lượng của mỗi sản phẩm đã được thêm vào giỏ hàng.
// Tạo một object mới bằng cách sử dụng spread operator {...state} để sao chép state hiện tại.
//Cập nhật số lượng của sản phẩm với action.productId trong object mới. Nếu state[action.productId] không tồn tại (chưa có sản phẩm này trong giỏ hàng), thì khởi tạo giá trị là 0 và cộng thêm 1. Nếu đã tồn tại, thì tăng giá trị lên 1.
const quantityId = (state = initialState.quantityById, action) =>{
    switch(action.type){
        case ADD_TO_CART:
            const {productId} = action;
            return {
                ...state,
                [productId]: (state[productId] || 0) + 1
            }
        default:
            return state
    }
}

 //1.Reducer cart là một tổng hợp của các reducer con là addedIds và quantityById, quản lý toàn bộ trạng thái của giỏ hàng.
 //2.Khi action.type là CHECKOUT_REQUEST: Trả về initialState để reset giỏ hàng về trạng thái ban đầu, khi người dùng yêu cầu thanh toán.
 //Khi action.type là CHECKOUT_FAILURE: Trả về action.cart để khôi phục lại trạng thái giỏ hàng trước khi thanh toán thất bại.
 const cart = (state = initialState,action) =>{
    switch(action.type){
        case CHECKOUT_REQUEST:
            return initialState
        case CHECKOUT_FAILURE:
            return action.cart
        case ADD_TO_CART:
            return {
                addedIds: addedIds(state.addedIds,action),
                quantityById: quantityId(state.quantityById,action)
            }
        default:
            return state
    }
 }
 export const getQuantity = (state,productId) => state.quantityById[productId] || 0
 export const getAddedIds = state => state.addedIds

 export default cart;