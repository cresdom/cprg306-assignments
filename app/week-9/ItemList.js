"use client";

import { useState } from "react";
import Item from "./item";

export default function ItemList({ items, onItemSelect }) {
    const [sortBy, setSortBy] = useState("name");

    const sortedItems = [...items].sort((a, b) => {
        if (sortBy === "name") return a.name.localeCompare(b.name);
        return a.category.localeCompare(b.category);
    });

    const activeBtn = "bg-purple-700 text-white dark:bg-purple-600 dark:text-white";
    const inactiveBtn = "bg-purple-200 text-purple-900 hover:bg-purple-300 " +
    "dark:bg-slate-800 dark:text-purple-200 dark:hover:bg-slate-700";


    return (
    <section className="mt-6 w-80">
        <div className="flex gap-2 mb-4">
            <button
            type="button"
            className={`flex-1 py-2 rounded-md font-bold transition ${
                sortBy === "name" ? activeBtn : inactiveBtn
            }`}
            onClick={() => setSortBy("name")}>Sort by Name</button>

            <button
            type="button"
            className={`flex-1 py-2 rounded-md font-bold transition ${
                sortBy === "category" ? activeBtn : inactiveBtn
            }`}
            onClick={() => setSortBy("category")}>Sort by Category</button>
        </div>

        <ul className="space-y-3">
            {sortedItems.map((item) => (
            <Item key={item.id} {...item} onSelect={() => onItemSelect(item)} />
            ))}
        </ul>
        </section>
    );
}
