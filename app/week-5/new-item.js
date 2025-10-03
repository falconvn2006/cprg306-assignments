"use client"
import { useState } from "react";

export default function NewItem() {
    // Variables
    const min = 1, max = 20;
    const [quantity, setQuantity] = useState(1);
    
    // Functions
    const increment = () => {
        if (quantity < max) setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity > min) setQuantity(quantity - 1)
    }

    // HTML
    return (
        <div className="mx-auto my-4 justify-center flex space-x-4 bg-white w-45 p-2 rounded">
            <p className="text-black w-12 text-lg font-bold text-center border border-black rounded">{quantity}</p>
            <button className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity<=min ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={decrement} disabled={quantity<=min}>-</button>
            <button className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity>=max ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} onClick={increment} disabled={quantity>=max}>+</button>
        </div>
    );
}