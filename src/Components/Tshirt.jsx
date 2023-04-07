import React from 'react';

const Tshirt = ({tshirt, handelAddToCart}) => {
    const{picture, name, price}= tshirt;
    return (
        <div className='overflow-hidden border-1 border-lime-800 rounded-xl flex flex-col justify-center items-center'>
            <img className='object-cover border rounded-lg h-48' src={picture} alt="" />
            <h4 className='text-center p-2'>{name}</h4>
            <p className='p-2 text-center'>${price}</p>
            <button onClick={()=>handelAddToCart(tshirt)} className='bg-yellow-400 h-10 w-20 p-2 rounded-xl'>Buy Now</button>
          
           
           </div>
        
    );
};

export default Tshirt;