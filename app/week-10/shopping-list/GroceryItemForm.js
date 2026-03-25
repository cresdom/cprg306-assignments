"use client";

import { useState } from "react";

const initialState = {
    name: "",
    quantity: 1,
    category: "produce",
};

export default function GroceryItemForm({ onAddItem }) {
    const [item, setItem] = useState(initialState);

    function handleChange(e) {
        const { name, value, type } = e.target

    setItem((prev) => ({
        ...prev,
        [name]: type === "number" ? Number(value) : value,
    }));
}

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedName = item.name.trim();
        if (!trimmedName) return;

        const newItem = {
            ...item,
            name: trimmedName,
            id: Math.random().toString(36).substring(2, 9),
        };

        onAddItem(newItem);
        setItem(initialState);
    }

    return (
        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-900 dark:border dark:border-slate-800 p-6 rounded-lg shadow-md w-80 space-y-4">
        {/* name of item */}
        <div>
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Item Name</label>
            <input
            type="text"
            name="name"
            value={item.name}
            onChange={handleChange}
            required
            className="w-full p-2 border border-purple-300 rounded-md focus:outline-none focus:ring-2 focus:ring-purple-400"/>
        </div>

        {/* quantity & category */}
        <div className="flex gap-4">
            <div className="flex-1">
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Quantity</label>
            <input
                type="number"
                name="quantity"
                min="1"
                max="99"
                value={item.quantity}
                onChange={handleChange}
                className="w-full p-2 border border-purple-300 rounded-md"/>
            </div>

            <div className="flex-1">
            <label className="block text-purple-900 dark:text-purple-200 mb-1 font-medium">Category</label>
            <select
                name="category"
                value={item.category}
                onChange={handleChange}
                className="w-full p-2 rounded-md border border-purple-300 bg-white text-purple-950 dark:bg-slate-800 dark:text-purple-100 dark:border-slate-700 dark:scheme-dark">
                <option value="produce">Produce</option>
                <option value="dairy">Dairy</option>
                <option value="bakery">Bakery</option>
                <option value="meat">Meat</option>
                <option value="frozen foods">Frozen Foods</option>
                <option value="canned goods">Canned Goods</option>
                <option value="dry goods">Dry Goods</option>
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