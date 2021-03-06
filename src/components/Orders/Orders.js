import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import { removeFromDb } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import ReviewItem from '../ReviewItem/ReviewItem';
import './Order.css'

const Orders = () => {
    const [products,setProducts] = useProducts(); 
    const [cart,setCart] = useCart(products);
    const navigate = useNavigate();
    const handleRemoveProduct = Product =>{
        const rest = cart.filter(pd => pd.id !== Product.id);
        setCart(rest);
         removeFromDb(Product.id);
    }
    return (
        <div className='shop-container'>
         <div className="review-items-container">
             {
                 cart.map(product => <ReviewItem

                    key ={product.id}
                    Product = {product}
                    handleRemoveProduct ={handleRemoveProduct}

                 ></ReviewItem>)
             }
         </div>

         <div className="cart-container">
             <Cart cart ={cart}>

                 
                    <button onClick={() => navigate('/Shipment')}>Proceed Shipping</button>
               
             </Cart>
         </div>
            
        </div>
    );
};

export default Orders;