import React from 'react';

const Cart = ({cart,handelRemoveCart}) => {
    let message;
    if (cart.length === 0){
        message = <p>Please add some products</p>
    }
    else{
        message= <div>
            <h3>Boroloxx</h3>
        </div>
    }
    return (
        <div className='sticky top-20'>
            <h2 className='text-2xl font-bold'>Order summery:{cart.length}</h2>
            { message}
            {
                cart.map(tshirt=><p key={tshirt._id}>{tshirt.name}
                <button className='p-3 text-red-600 font-bold'
                onClick={()=>handelRemoveCart(tshirt._id)}> X</button></p>)
            }
        </div>
    );
};

export default Cart;

// conditional rendering
// 1. use if else to set a variable that will contain an element,components
// 2.