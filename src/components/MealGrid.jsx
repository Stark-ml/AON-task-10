import MealCard from "./MealCard";

export default function MealGrid({ meals, onSelect }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
      {meals.map((meal) => (
        <MealCard
          key={meal.idMeal}
          meal={meal}
          onClick={onSelect}
        />
      ))}
    </div>
  );
}
