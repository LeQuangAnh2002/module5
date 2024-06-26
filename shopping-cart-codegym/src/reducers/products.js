import { combineReducers } from 'redux'
import { RECEIVE_PRODUCTS,ADD_TO_CART } from '../constants/ActionTypes'

const products = (state,action) => {
    switch (action.type) {
        case ADD_TO_CART:
        return{
            ...state,
            inventory: state.inventory -1
        }
        default:
            return state;
    }
}
// đây là reducer function trong redux, chịu trách nhiệm quản lý phần byId của state trong ứng dụng
//...state sử dụng toán tử spread để sao chép tất cả các key-value cũ từ state hiện tại sang state mới.Điều này đảm bảo state mới sẽ chứa tất cả các dữ liệu hiện có trong state cũ, không bị mất đi.
//action.products.reduce((obj, product) => { ... }, {}): Đây là việc sử dụng phương thức reduce() để biến đổi mảng action.products thành một object mới.
//Kết quả của reduce() là một object mới, chứa tất cả các sản phẩm từ action.products. Toán tử spread ... được sử dụng để tách các key-value này ra và đưa chúng vào state mới.
const byId = (state = {}, action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return {
                ...state,
                ...action.products.reduce((obj, product) => {
                    obj[product.id] = product
                    return obj
                }, {})
            }
        case ADD_TO_CART:
            const {productId} = action;
            return {
                ...state,
                [productId]: products(state[productId],action)
            }
        default:
            return state
    }
}
//Mục đích của reducer visibleIds là để lưu trữ danh sách các id của các sản phẩm hiện đang được hiển thị (visible) trong ứng dụng
const visibleIds = (state = [], action) => {
    switch (action.type) {
        case RECEIVE_PRODUCTS:
            return action.products.map(product => product.id)
        default:
            return state
    }
}
//sử dụng hàm combineReducers từ Redux để kết hợp hai reducer con thành một reducer cha
export default combineReducers({
    byId,
    visibleIds
})
//state.byId[id]: Ở đây, chúng ta đang truy cập vào một phần của state, cụ thể là state.byId. state.byId là một object, chứa thông tin chi tiết của các sản phẩm, và key của object này chính là ID của sản phẩm.
export const getProduct = (state, id) =>
    state.byId[id]
//Lấy danh sách các ID sản phẩm hiển thị từ state.visibleIds.
// Với mỗi ID trong danh sách, sử dụng hàm getProduct để lấy thông tin chi tiết của sản phẩm tương ứng từ state.byId.
// Trả về một mảng mới, chứa danh sách các sản phẩm hiển thị.
export const getVisibleProducts = state =>
    state.visibleIds.map(id => getProduct(state, id))