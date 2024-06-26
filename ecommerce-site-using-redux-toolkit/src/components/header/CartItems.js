import React from "react";
import {AiOutlineClose,AiOutlinePlus,AiOutlineMinus} from "react-icons/ai";
import {useDispatch} from "react-redux";
import cartActions from "../../store/CartSlice";


export const CartItem = ({id,cover,price,name,quantity,totalPrice}) =>{
    const dispatch = useDispatch();
    const incCartItems = () => {
        dispatch(cartActions.actions.addToCart({ id, name, price }))
    }
    const desCartItems = () => {
        dispatch(cartActions.actions.removeFromCart(id))
    }
    const deleteProduct = () => {
        dispatch(cartActions.actions.deleteAProduct(id))
    }
    return(
        <div>
            <div className='cardList' key={id}>
                <div className='cartContent'>
                    <div className='img'>
                        <img src={cover} alt='' />
                        <button className="remove flexCenter" onClick={deleteProduct}>
                            <AiOutlineClose/>
                        </button>
                    </div>
                    <div className='details'>
                        <p>{name}</p>
                        <label htmlFor=''>Unit Price ${price}</label>

                        <div className="price">
                            <div className="qty flexCenter">
                                <button className="plus" onClick={incCartItems}>
                                    <AiOutlinePlus/>
                                </button>
                                <button className="num" >{quantity}</button>
                                <button className="minus" onClick={desCartItems}>
                                    <AiOutlineMinus/>
                                </button>
                            </div>
                            <div className="priceTitle">${totalPrice}</div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}