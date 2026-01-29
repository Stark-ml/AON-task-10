export default function MealCard({ meal, onClick }) {
  return (
    <div
      onClick={() => onClick(meal)}
      className="bg-slate-800 text-black rounded-xl shadow cursor-pointer
                 hover:scale-105 hover:shadow-lg transition"
    >
      <img
        src={meal.strMealThumb}
        alt={meal.strMeal}
        className="rounded-t-xl"
      />
      <div className="p-4">
        <h2 className="font-semibold text-white">
          {meal.strMeal}
        </h2>
      </div>
    </div>
  );
}
