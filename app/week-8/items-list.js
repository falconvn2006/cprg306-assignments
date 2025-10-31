"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemsList({ itemsData, onItemSelect }) {

    const [sortBy, setSortBy] = useState("name");

    const sortName = (itemA, itemB) => {
        if (itemA.name < itemB.name) return -1;
        if (itemA.name > itemB.name) return 1;
        return 0;
    }

    const sortCategory = (itemA, itemB) => {
        if (itemA.category < itemB.category) return -1;
        if (itemA.category > itemB.category) return 1;
        return 0;
    }

    const handleSort = [...itemsData].sort((itemA, itemB) => {
        if (sortBy == "name")
            return sortName(itemA, itemB);
        
        if (sortBy == "category")
            return sortCategory(itemA, itemB);
    });

    return (
    <main>
        <div className="flex items-center gap-2">
            <p className="text-sm text-gray-600">Sort by: </p>
            <button onClick={() => setSortBy("name")} className={`px-3 py-1 rounded border text-sm transition-colors cursor-pointer ${sortBy === "name" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 hover:bg-gray-400"}`}>Name</button>
            <button onClick={() => setSortBy("category")} className={`px-3 py-1 rounded border text-sm transition-colors cursor-pointer ${sortBy === "category" ? "bg-blue-600 text-white border-blue-600" : "bg-gray-100 text-gray-800 hover:bg-gray-400"}`}>Category</button>
        </div>
    
        <ul>
            {handleSort.map((item, i) => (
                <li key={i}> <Item item={item} onSelect={onItemSelect} /> </li>
            ))}
        </ul>
    </main>
    );
}