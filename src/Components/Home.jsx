import React, { useState } from 'react';
import { useLoaderData,useNavigation } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Tshirt from './Tshirt';
import Cart from './Cart';
import LoadingSpinner from './LoadingSpinner';

const Home = () => {
    const navigation =useNavigation()
    console.log(navigation.state)
    if(navigation.state==='loading'){
        return<LoadingSpinner/>
    }
    const tshirts= useLoaderData();
    const [cart, setCart] = useState([]);

    const handelAddToCart = tshirt=>{
        const exit = cart.find (ts=> ts._id === tshirt._id)
        if (exit){
            toast('already added product')
        }
        else{
            const newCart = [...cart, tshirt]
            setCart(newCart);
        }
       
    }
    const handelRemoveCart= id =>{
        const remaining= cart.filter(ts=> ts._id !==id)
        setCart(remaining)
    }

    return (
        <div className=' grid grid-cols-2 gap-7 mt-20'>
           <div className='t-shirt-container grid grid-cols-3 gap-y-9  space-x-8'>
           {
            tshirts.map(tshirt=><Tshirt 
                key={tshirt._id}
                tshirt={tshirt}
                handelAddToCart={handelAddToCart}>
               
                </Tshirt>)
           }
           </div>
           <div className="cart-container  ">
            <Cart cart={cart} 
            handelRemoveCart={handelRemoveCart}></Cart>
           </div>
           <ToastContainer />
        </div>
    );
};


export default Home;