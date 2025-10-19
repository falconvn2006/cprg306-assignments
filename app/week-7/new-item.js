"use client"
import { useState } from "react";

export default function NewItem( {onAddItem} ) {
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

        onAddItem((prevItems) => [...prevItems, newItem]);

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    // HTML
    return (
        <form 
            className="mx-auto my-4 gap-3 flex flex-col justify-content text-black bg-white w-100 p-4"
            onSubmit={handleSubmit}
        >
            <input 
                className="border border-gray-600 rounded p-2"
                value={name} 
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter your item name" 
                required
            />

            <div className="flex space-x-24 ">
                <div className="flex items-center space-x-2">
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
                </div>
                <select 
                    className="border text-black border-gray-300 rounded p-2 cursor-pointer"
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
                className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer"
                >Add Item</button>
        </form>
    );
}