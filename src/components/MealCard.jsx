export default function MealCard({ meal, onClick }) {
  return (
    <div
      onClick={() => onClick(meal)}
      className="bg-white rounded-xl shadow cursor-pointer hover:scale-105 transition"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-semibold text-lg">{meal.strMeal}</h2>
      </div>
    </div>
  );
}
