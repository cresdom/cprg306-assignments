"use client";

import Link from "next/link";
import { useState } from "react";
import itemsData from "./items.json";
import GroceryItemForm from "./GroceryItemForm";
import ItemList from "./ItemList";

export default function Page() {
    const [items, setItems] = useState(itemsData);

    function handleAddItem(newItem) {
        setItems((prevItems) => [...prevItems, newItem]);
    }

    return (
        <main className="min-h-screen bg-linear-to-r from-violet-100 to-fuchsia-200 dark:from-slate-950 dark:to-slate-900 flex flex-col items-center gap-6 text-purple-950 dark:text-purple-100">
            <div className="w-full max-w-xl">
            <Link href="/" className="text-purple-700 hover:underline font-light dark:text-purple-300">← Back to Home</Link>
        </div>

        <h1 className="text-3xl font-bold text-purple-900 text-center mt-8 dark:text-purple-200">Shopping List</h1>

        <GroceryItemForm onAddItem={handleAddItem} />

        <ItemList items={items} />

        <section className="mt-10 w-80 bg-white dark:bg-slate-900 border border-dashed border-purple-500 rounded-lg p-4">
            <h2 className="text-xl font-bold text-center mb-3 text-purple-900 dark:text-purple-200">Wireframe</h2>

            <div className="border border-purple-400 rounded-md p-3 mb-3 text-center">Grocery Item Form</div>

            <div className="space-y-2">
                <div className="border border-purple-300 rounded-md p-2 text-center">Grocery Item 1</div>
                <div className="border border-purple-300 rounded-md p-2 text-center">Grocery Item 2</div>
                <div className="border border-purple-300 rounded-md p-2 text-center">Grocery Item 3</div>
            </div>
        </section>
    </main>
    );
}