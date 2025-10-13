"use client";

import { useState } from "react";
import Item from "./item";
import itemsData from "./items.json"

export default function ItemsList() {

    const [sortBy, setSortBy] = useState("name");

    const handleSort = [...itemsData].sort((itemA, itemB) => {
        if (sortBy == "name")
            return itemA.name.localeCompare(itemB.name);
        
        if (sortBy == "category")
            return itemA.category.localeCompare(itemB.category);
    });

    return (
    <main>
        <div>
            <button onClick={() => setSortBy("name")} className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer">Sort By Name</button>
            <button onClick={() => setSortBy("category")} className="p-2 bg-blue-500 text-white rounded-lg cursor-pointer">Sort By Category</button>
        </div>

        <ul>
            {handleSort.map((item, i) => (
                <li key={i}> <Item item={item} /> </li>
            ))}
        </ul>
    </main>
    );
}