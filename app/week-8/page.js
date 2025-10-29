'use client';

import NewItem from "./new-item";
import ItemsList from "./items-list";
import MealIdeas from "./meal-ideas";

import itemsData from "./items.json";

import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState('');

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    const handleItemSelect = (itemSelected) => {
        console.log(itemSelected)
        const cleanItemSelected = itemSelected.replace(/([\u2700-\u27BF]|[\uE000-\uF8FF]|\uD83C[\uDC00-\uDFFF]|\uD83D[\uDC00-\uDFFF]|[\u2011-\u26FF]|\uD83E[\uDD10-\uDDFF])/g, '').trim();

        setSelectedItemName(cleanItemSelected);
        console.log(cleanItemSelected);
    }

    return (
        <main>
            <h1 className="text-5xl font-bold">Shopping List</h1>

            <NewItem onAddItem={handleAddItem} />
            <ItemsList itemsData={items} onItemSelect={handleItemSelect} />
            <MealIdeas ingredient={selectedItemName} />
        </main>


    );


}