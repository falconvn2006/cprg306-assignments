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
        
        let x = "";
        for (let i = 0; i < cleanItemSelected.length; i++) {
            if (cleanItemSelected[i] == ',') break;
            x += cleanItemSelected[i];
        }

        setSelectedItemName(x);
        console.log(x);
    }

return (
  <main className="flex flex-col items-center gap-2 content-center">
    <h1 className="text-5xl font-bold">Shopping List + Meal Ideas</h1>

    <div className="flex flex-col md:flex-row gap-5 m-2 items-start">
      <div>
        <NewItem onAddItem={handleAddItem} />
        <ItemsList itemsData={items} onItemSelect={handleItemSelect} />
      </div>

      <div className="md:self-start">
        <MealIdeas ingredient={selectedItemName} />
      </div>
    </div>
  </main>
);


}