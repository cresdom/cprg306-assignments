"use client";

import Link from "next/link";
import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";


export default function Page() {
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    function handleItemSelect(item) {
        const cleanedName = item.name
        setSelectedItemName(cleanedName);
    }

    return (
        <main className="min-h-screen bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 flex flex-col items-center gap-6 text-purple-950 dark:text-purple-100">
            <div className="w-full max-w-xl">
            <Link href="/" className="text-purple-700 hover:underline font-light dark:text-purple-300">← Back to Home</Link>
        </div>

        <h1 className="text-3xl font-bold text-purple-900 text-center mt-8 dark:text-purple-200">Shopping List</h1>

        <GroceryItemForm onAddItem={handleAddItem} />

        <ItemList items={items} onItemSelect={handleItemSelect} />

        <MealIdeas ingredient={selectedItemName} />

    </main>
    );
}