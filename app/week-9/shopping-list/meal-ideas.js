'use client';

import { useState, useEffect } from "react";

async function fetchMealIdeas(ingredient)
{
    try {
        const response = await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`);
        const data = await response.json();
        console.log(data);
        return data.meals || [];
    } catch (error) {
        console.error('Error fetching meal ideas:', error);
        return [];
    }
}

export default function MealIdeas({ ingredient }) {
    const [meals, setMeals] = useState([]);

    const loadMealIdeas = async () => {
        try {
            const mealsResult = await fetchMealIdeas(ingredient);
            setMeals(mealsResult);
        }
        catch(error) {
            console.log(error);
        }
    }

    useEffect(() => {
        if(ingredient.length > 0)
            loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
        <header className="text-lg font-semibold mb-2">
            {ingredient ? `Meal Ideas for "${ingredient}"` : "Select an ingredient"}
        </header>

        {
            !ingredient ? (<p className="text-gray-500">Choose an item to see ideas.</p>) 
            : meals.length === 0 ? (<p className="text-gray-500">No meals found.</p>) 
            : (
                <ul className="grid grid-cols-1 sm:grid-cols-2">
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="p-2 m-2 bg-slate-900 max-w-sm border rounded">
                    {meal.strMeal}
                    </li>
                ))}
                </ul>
            )
        }
        </div>
    );
}