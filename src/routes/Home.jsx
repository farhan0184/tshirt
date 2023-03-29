import React, { useState } from 'react';
import useTShirts from '../useTShirts';
import Cart from './Cart';
import TShirt from './TShirt';

const Home = () => {
    const [tShirts,setTShirts] = useTShirts()
    const [carts, setCarts] =useState([])
    const handleToCarts = (selectedItem) =>{
        if(selectedItem._id ){
            if(!carts.find(item => item._id === selectedItem._id)){
                const newCart = [...carts,selectedItem]
                setCarts(newCart) 
            }
            else{
                alert('Cart already.')
            }
        } 
    }

    const removeItem = (selectedItem) =>{
        const rest = carts.filter(cart => cart._id !== selectedItem._id)
        setCarts(rest)
    }

    const removeAllItem = () =>{
        setCarts([])
    }

    let command;
    if(carts.length === 0){
        command = <p className='italic text-gray-500'>Add at least one item</p>
    }
    else if( carts.length === 4){
        command = <p className='italic text-gray-500'>To Much</p>
    }
    else{
        command = <p className='italic text-gray-500'>Add More Item</p>
    }
    return (
        <div className='w-11/12 mx-auto'>
             
            <div className='grid grid-cols-4 gap-x-10'>
                <div className='col-span-3'>
                    <h1 className='text-center text-2xl text-gray-500 italic mt-5'>TShirts section: {tShirts.length}</h1>
                    <div className='grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-5'>
                        {
                            tShirts.map(tShirt => <TShirt
                                key={tShirt._id}
                                tShirt={tShirt}
                                handleToCarts={handleToCarts}
                            ></TShirt>)
                        }
                    </div>
                </div>
                <div>
                    <h1 className='text-center text-2xl text-gray-500 italic mt-5'>Order Section {carts.length}</h1>
                    <div>
                        
                        {
                            carts.map(cart => <Cart
                                cart={cart}
                                key={cart._id}
                                removeItem={removeItem}
                            ></Cart>)
                        }
                        {command}
                        {carts.length === 3 && <p className='italic text-gray-500'>Family gifts</p>}
                        {carts.length !== 1 || <p className='italic text-gray-500'>Gf gift</p>}
                        {carts.length !== 4 ? '' : <button onClick={removeAllItem} className='p-2 rounded-full bg-yellow-600 italic'> Remove all</button>}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default Home;