"use client";

import { useState } from "react";

export default function NewItem() {
    const [name, setName] = useState("");
    const [quantity, setQuantity] = useState(1);
    const [category, setCategory] = useState("produce");
    function handleSubmit(event) {
        event.preventDefault();
        const item = {
        name: name,
        quantity: quantity,
        category: category,
        };
        console.log(item);
        alert(
        "Added: " +
            item.name +
            ", quantity: " +
            item.quantity +
            ", category: " +
            item.category
        );

        setName("");
        setQuantity(1);
        setCategory("produce");
    }

    return (
        <form onSubmit={handleSubmit}>
        {/* name of item */}
        <div>
            <label>Item Name</label>
            <input
            type="text"
            value={name}
            onChange={(event) => setName(event.target.value)}
            required/>
        </div>

        {/* quantityy & category */}
        <div className="flex gap-4">
            <div className="flex-1">
            <label>Quantity</label>
            <input
                type="number"
                min="1"
                max="99"
                value={quantity}
                onChange={(event) =>
                setQuantity(Number(event.target.value))
                }/>
            </div>

            <div className="flex-1">
            <label>Category</label>
            <select
                value={category}
                onChange={(event) => setCategory(event.target.value)}
                className="w-full p-2 border border-purple-300 rounded-md">
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

        {/* submit button */}
        <button type="submit"className="w-full bg-purple-600 hover:bg-purple-700 text-white font-bold py-2 rounded-md transition">+</button>
        </form>
    );
}
