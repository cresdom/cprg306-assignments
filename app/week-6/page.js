"use client";

import { useState } from "react";
import itemsData from "./items.json";
import NewItem from "./NewItem";
import ItemList from "./ItemList";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <main className="p-6 flex flex-col items-center gap-6">
        <h1 className="text-3xl font-bold">Shopping List</h1>

        <NewItem onAddItem={handleAddItem} />

        <ItemList items={items} />
        </main>
    );
}