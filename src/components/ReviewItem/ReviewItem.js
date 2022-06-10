import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import Product from '../Product/Product';
import './ReviewItem.css'


const ReviewItem = (props) => {
    const {Product,handleRemoveProduct} = props;
    const {name ,img,price ,shipping ,quantity} = Product;
    return (
        <div className='review-item'>
            <div>

            <img src={img} alt="" />
            </div>

            <div className="review-item-details-container">
                <div className="review-item-details">
                        <p className="product-name" title={name}>
                            
                             {name.length > 20 ? name.slice(0,20) +'...': name } 
                             
                             </p>
                        <p> Price :<span className='blue-color'> ${price}</span> </p>
                        <p> <small> Shipping : ${shipping}</small></p>
                        <p> <small> quantity:{quantity}</small></p>
                </div>
                <div className="delete-container">
                    <button onClick={() => handleRemoveProduct(Product) } className='delete-btn'>
                        <FontAwesomeIcon className='delete-icon' icon={faTrashAlt}></FontAwesomeIcon>
                    </button>
                </div>


            </div>


        </div>

    );
};

export default ReviewItem;