"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json"

export default function ItemsList() {

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
        <div className="mt-3 flex gap-2 justify-center">
            <button onClick={() => setSortBy("name")} className={`p-2 ${sortBy == "name" ? "bg-blue-500" : "bg-gray-600"} text-white rounded-lg cursor-pointer`}>Sort By Name</button>
            <button onClick={() => setSortBy("category")} className={`p-2 ${sortBy == "category" ? "bg-blue-500" : "bg-gray-600"} text-white rounded-lg cursor-pointer`}>Sort By Category</button>
        </div>

        <ul>
            {handleSort.map((item, i) => (
                <li key={i}> <Item item={item} /> </li>
            ))}
            
        </ul>
    </main>
    );
}