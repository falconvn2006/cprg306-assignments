'use client';

import NewItem from "./new-item";
import ItemsList from "./items-list";
import itemsData from "./items.json"

import { useState } from "react";

export default function Page() {

    const [items, setItems] = useState(itemsData);

    const handleAddItem = (newItem) => {
        setItems([...items, newItem]);
    }

    return (
        <main>
            <h1 className="text-5xl font-bold">Shopping List</h1>

            <NewItem onAddItem={handleAddItem} />
            <ItemsList itemsData={items} />
        </main>


    );


}