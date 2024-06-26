import React from 'react'
import {AiOutlinePlusCircle} from "react-icons/ai";
import {Link} from "react-router-dom";
import {useDispatch} from "react-redux";
import cartActions from "../../store/CartSlice";

export const ProductCart =({key,id,cover,name,price}) =>{
    const dispatch = useDispatch();
    const addToCart = () => {
        dispatch(cartActions.actions.addToCart({ id, name, price, cover }))
    }
    return(
        <div>
            <div className="box boxItems" id='product'>
                <div className='img'>
                    <Link>
                        <img src={cover} alt="cover"/>
                    </Link>
                </div>
                <div className="details">
                    <h3>${price}</h3>
                    <p>{name}</p>
                    <button onClick={addToCart}>
                        <AiOutlinePlusCircle/>
                    </button>
                </div>
            </div>
        </div>
    )
}