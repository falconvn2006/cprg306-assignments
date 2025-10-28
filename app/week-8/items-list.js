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
    <main className="flex flex-col items-center">
        <ul>
            {handleSort.map((item, i) => (
                <li key={i}> <Item item={item} onSelect={onItemSelect} /> </li>
            ))}
        </ul>

        <div>
            <button onClick={() => setSortBy("name")} className= "bg-yellow-500 m-4 p-2 font-bold text-xl rounded cursor-pointer" >Sort By Name</button>
            <button onClick={() => setSortBy("category")} className= "bg-yellow-500 m-4 p-2 font-bold text-xl rounded cursor-pointer" >Sort By Category</button>
        </div>
    </main>
    );
}