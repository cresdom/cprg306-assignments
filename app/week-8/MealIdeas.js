"use client";

import { useEffect, useState } from "react";

async function fetchMealIdeas(ingredient) {
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);

    if (!response.ok) {
        throw new Error("Failed to fetch meal ideas.");
    }

    const data = await response.json();
    return data.meals || [];
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    async function loadMealIdeas() {
        if (!ingredient) {
            setMeals([]);
            setError("");
            return;
        }

        try {
            setLoading(true);
            setError("");
            const mealIdeas = await fetchMealIdeas(ingredient);
            setMeals(mealIdeas);
        }

        catch (err) {
            setMeals([]);
            setError("Could not load meal ideas.");
        }

        finally {
            setLoading(false);
        }

        const mealIdeas = await fetchMealIdeas(ingredient);
        setMeals(mealIdeas);
    }

    useEffect(() => {loadMealIdeas();}, [ingredient]);

    return (
        <section className="bg-white dark:bg-slate-900 p-6 rounded-lg shadow-md w-80">
            <h2 className="text-2xl font-bold mb-4 text-purple-900 dark:text-purple-200">Meal Ideas</h2>

            {!ingredient ? (
                <p className="text-purple-800 dark:text-purple-300">Select an item to see meal ideas!</p>
            ) : loading ? (
                <p className="text-purple-800 dark:text-purple-300">Loading meal ideas....</p>
            ) : error ? (
                <p className="text-red-600 dark:text-red-400"> {error} </p>
            ) : meals.length === 0 ? (
                <p className="text-purple-800 dark:text-purple-300">No meal ideas found for <strong>{ingredient}</strong></p>
            ) : (
                <>
                    <p className="mb-3 text-purple-800 dark:text-purple-300">Here are some meal ideas using <strong>{ingredient}</strong>:</p>

                    <ul className="space-y-2">
                        {meals.map((meal) => (
                            <li key={meal.idMeal}className="border border-purple-300 rounded-md p-2 text-purple-900 dark:text-purple-100">{meal.strMeal} </li>
                        ))}
                    </ul>
                </>
            )}
        </section>
    );
}