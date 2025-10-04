"use client"
import { useState } from "react";

export default function NewItem() {
    // Variables
    const min = 1, max = 20;
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    
    // Functions
    const increment = () => {
        if (quantity < max) setQuantity(quantity + 1)
    }

    const decrement = () => {
        if (quantity > min) setQuantity(quantity - 1)
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create new item object
        const newItem = {
            name: name,
            quantity: quantity,
            category: category
        };

        console.log(newItem);

        window.alert(`Added a new item Name: ${name}; Quantity: ${quantity}; Category: ${category}`);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    // HTML
    return (
        <form 
            className="mx-auto my-4 gap-3 flex flex-col justify-content text-black bg-white w-100 p-4 "
            onSubmit={handleSubmit}
        >
            <input 
                className=""
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your item name" 
                required
            />
            <div>
                <p className="text-black w-12 text-lg font-bold text-center border border-black rounded">{quantity}</p>
                <button 
                    type="button"
                    className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity<=min ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} 
                    onClick={decrement} 
                    disabled={quantity<=min}>-</button>
                <button 
                    type="button"
                    className={`px-3 py-1 rounded font-extrabold text-lg text-white ${quantity>=max ? 'bg-gray-300 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'}`} 
                    onClick={increment} 
                    disabled={quantity>=max}>+</button>
                <select 
                    className=""
                    value={category} 
                    onChange={(e) => setCategory(e.target.value)}
                >
                    <option value="produce">Produce</option>
                    <option value="dairy">Dairy</option>
                    <option value="bakery">Bakery</option>
                    <option value="meat">Meat</option>
                    <option value="frozen_foods">Frozen Foods</option>
                    <option value="canned_foods">Canned Foods</option>
                    <option value="dry_goods">Dry Goods</option>
                    <option value="beverages">Beverages</option>
                    <option value="snacks">Snacks</option>
                    <option value="household">Household</option>
                    <option value="other">Other</option>
                </select>
            </div>
            <button 
                type="submit"
                className=""
                >Add Item</button>
        </form>
    );
}