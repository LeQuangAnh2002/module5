import React, {useState} from "react";
import {BiShoppingBag} from "react-icons/bi"
import {AiOutlineClose} from "react-icons/ai"
import {CartItem} from "./CartItems";
import {product} from "../../assets/data/data";
import {useSelector} from "react-redux";

export const Card = () =>{
    const [cardOpen,setCardOpen] = useState(false)
    const closeCard = () =>{
        setCardOpen(null)
    }

    const  quantity = useSelector(state => state.cart.totalQuantity)
    const  cartItems = useSelector(state => state.cart.itemsList)

    //total
    let total = 0
    const itemsLists = useSelector(state => state.cart.itemsList)
    itemsLists.forEach((item) =>{
        total += item.totalPrice
    })
    return(
        <>
            <div className="card" onClick={() => setCardOpen(!cardOpen)}>
                <BiShoppingBag className="cardIcon"/>
                <span className="flexCenter">{quantity}</span>
            </div>
            <div className={cardOpen ? "overlay" : "nonoverlay"} />

            <div className={cardOpen ? 'cardItem' : 'cardhide'}>
                <div className="title flex">
                    <h2>Shopping Cart</h2>
                    <button onClick={closeCard}>
                        <AiOutlineClose className="icon"/>
                    </button>
                </div>
                {cartItems.map(item => (
                    <CartItem
                        id={item.id}
                        cover={item.cover}
                        name={item.name}
                        price={item.price}
                        quantity={item.quantity}
                        totalPrice={item.totalPrice}/>
                ))}
                <div className="checkOut">
                    <button>
                        <span>Priced To CheckOut</span>
                        <label htmlFor="">$ {total}</label>
                    </button>
                </div>
            </div>
        </>
    )
}