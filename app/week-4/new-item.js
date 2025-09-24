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
        <div>
            <p>{quantity}</p>
            <button onClick={decrement} disabled={quantity<=min}>-</button>
            <button onClick={increment} disabled={quantity>=max}>+</button>
        </div>
    );
}