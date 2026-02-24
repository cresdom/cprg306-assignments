"use client";

import { useState } from "react";

export default function NewItem({ onAddItem }) {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    function handleSubmit(event) {
        event.preventDefault();

        const item = {
        id: Math.random().toString(36).substring(2, 9),
        name,
        quantity,
        category,
        };

        onAddItem(item);
        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit}className="bg-white dark:bg-slate-900 dark:border dark:border-slate-800 p-6 rounded-lg shadow-md w-80 space-y-4">
        {/* name of item */}
        <div>
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Item Name</label>
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"/>
        </div>

        {/* quantityy & category */}
        <div className="flex gap-4">
            <div className="flex-1">
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Quantity</label>
            <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(event) => 
                setQuantity(Number(event.target.value))
                }
                className="w-full p-2 border border-purple-300 rounded-md"/>
            </div>

            <div className="flex-1">
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Category</label>
            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full p-2 rounded-md border border-purple-300 bg-white text-purple-950 dark:bg-slate-800 dark:text-purple-100 dark:border-slate-700dark:[color-scheme:dark]">
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen-foods">Frozen Foods</option>
                <option value="canned-goods">Canned Goods</option>
                <option value="dry-goods">Dry Goods</option>
                <option value="beverages">Beverages</option>
                <option value="snacks">Snacks</option>
                <option value="household">Household</option>
                <option value="other">Other</option>
            </select>
            </div>
        </div>

        {/* submit button*/}
        <button
            type="submit"
            className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-md transition dark:bg-purple-600 dark:hover:bg-purple-500">+ Add</button>
        </form>
    );
}