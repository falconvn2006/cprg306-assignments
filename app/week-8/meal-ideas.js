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
        try{
            const mealsResult = await fetchMealIdeas(ingredient);
            setMeals(mealsResult);
            console.log(mealsResult);
        }
        catch(error)
        {
            console.log(error);
        }
    }

    useEffect(() => {
        loadMealIdeas();
    }, [ingredient]);

    return (
        <div>
            <header className="text-3xl font-bold my-4">Meal Ideas for "{ingredient}"</header>
            <ul>
                {meals.map((meal) => (
                    <li key={meal.idMeal} className="p-2 m-2 bg-slate-900 max-w-sm">
                        {meal.strMeal}
                    </li>
                ))}
            </ul>
        </div>
    )
}