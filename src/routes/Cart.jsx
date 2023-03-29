import React from 'react';

const Cart = ({cart ,removeItem}) => {

   
    return (
        <div>
            {
                <p className='text-gray-500 italic'>{cart.name}
                <button onClick={() => removeItem(cart)}  className='p-2 rounded-full bg-yellow-600 italic ml-5'>X</button>
                </p>
            }
           
        </div>
    );
};

export default Cart;