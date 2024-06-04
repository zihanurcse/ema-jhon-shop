import React from 'react';
import './ReviewItem.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

const ReviewItem = (props) => {
    const {id, img, price, name, quantity} = props.product;
    const handleDeleteToCart = props.handleDeleteToCart;
    console.log(props.product)

    return (
        <div className='item-container'>
            <img src={img} alt="" />
            <div className='item-details'>
                <p>{name}</p>
                <p>Price: <span className='text-orange'>{price}</span></p>
                <p>Quantity: <span className='text-orange'>{quantity}</span></p>
            </div>
            <button onClick={()=>handleDeleteToCart(id)}><FontAwesomeIcon className='trash' icon={faTrashAlt} /></button>
        </div>
    );
};

export default ReviewItem;