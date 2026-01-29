const categories = ["Chicken", "Beef", "Vegetarian", "Seafood"];

export default function CategoryFilter({ active, onSelect }) {
  return (
    <div className="flex gap-3 justify-center mb-8 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium transition ${
            active === cat
              ? "bg-indigo-600 text-white"
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
