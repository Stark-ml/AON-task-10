export default function MealModal({ meal, onClose }) {
  const getIngredients = () => {
    const list = [];
    for (let i = 1; i <= 20; i++) {
      const ing = meal[`strIngredient${i}`];
      const mea = meal[`strMeasure${i}`];
      if (ing) list.push(`${ing} - ${mea}`);
    }
    return list;
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4">
      <div className="bg-white text-black rounded-xl max-w-2xl w-full p-6 overflow-y-auto max-h-[90vh]">
        <button
          onClick={onClose}
          className="mb-4 text-red-600 font-semibold"
        >
          Close ✖
        </button>

        <h2 className="text-2xl font-bold mb-4">
          {meal.strMeal}
        </h2>

        <img
          src={meal.strMealThumb}
          className="rounded-lg mb-4"
        />

        <h3 className="font-semibold mb-2">Ingredients</h3>
        <ul className="list-disc list-inside mb-4">
          {getIngredients().map((item, i) => (
            <li key={i}>{item}</li>
          ))}
        </ul>

        <h3 className="font-semibold mb-2">Instructions</h3>
        <p className="text-sm leading-relaxed">
          {meal.strInstructions}
        </p>
      </div>
    </div>
  );
}
