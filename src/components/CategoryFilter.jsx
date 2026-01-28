const categories = ["Chicken", "Beef", "Vegetarian", "Seafood"];

export default function CategoryFilter({ active, onSelect }) {
  return (
    <div className="flex gap-2 justify-center mb-6 flex-wrap">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`px-4 py-2 rounded-full text-sm font-medium shadow ${
            active === cat
              ? "bg-indigo-600 text-white"
              : "bg-white"
          }`}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}
