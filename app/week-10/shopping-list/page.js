"use client";

import Link from "next/link";
import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";
import MealIdeas from "./MealIdeas";
import { useUserAuth } from "../../contexts/AuthContext";


export default function Page() {
    const { user } = useUserAuth();
    const [items, setItems] = useState(itemsData);
    const [selectedItemName, setSelectedItemName] = useState("");

    if (!user) {
        return (
            <main className="min-h-screen flex flex-col items-center justify-center bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 text-purple-950 dark:text-purple-100 p-6">
                <p className="mb-4 text-xl font-semibold">You must be logged in to view the shopping list.</p>
                <Link href="/week-9" className="text-purple-700 hover:underline dark:text-purple-300">Go back to login</Link>
            </main>
        );
    }

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    function handleItemSelect(item) {
        const cleanedName = item.name
        .split(",")[0]
        .trim()
        .replace(/[^\p{L}\p{N}\s-]/gu,"");

        setSelectedItemName(cleanedName);
    }

    return (
        <main className="min-h-screen bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 flex flex-col items-center gap-6 text-purple-950 dark:text-purple-100">
            <div className="w-full max-w-xl">
            <Link href="/week-9" className="text-purple-700 hover:underline font-light dark:text-purple-300">← Back to Home</Link>
        </div>

        <h1 className="text-3xl font-bold text-purple-900 text-center mt-8 dark:text-purple-200">Shopping List</h1>

        <div className="flex flex-col md:flex-row gap-10 items-start">
            <div className="flex flex-col items-center">
                <GroceryItemForm onAddItem={handleAddItem} />
                <ItemList items={items} onItemSelect={handleItemSelect} />
            </div>
            <MealIdeas ingredient={selectedItemName} />
        </div>
    </main>
    );
}