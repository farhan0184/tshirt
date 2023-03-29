import React from 'react';

const TShirt = ({tShirt, handleToCarts}) => {
    const {name, picture,price} = tShirt;
    return (
        <div className='w-full p-4 rounded-lg shadow-lg border-[1px] bg-gray-100'>
            <img className='h-[300px] object-cover w-full rounded-lg' src={picture} alt="" />
            <div>
                <h1 className='text-left text-xl text-gray-500 italic mt-2'>{name}</h1>
                <p className='text-left text-gray-500 italic mt-2'>Price: $<span className='text-xl text-yellow-600'>{price}</span></p>
                <div className='flex justify-start mt-2'>
                    <button className='px-3 py-2 bg-yellow-700 rounded-lg '
                       onClick={()=>handleToCarts(tShirt)}
                    >Add To Cart</button>
                </div>
            </div>
        </div>
    );
};

export default TShirt;