import { useEffect, useState } from "react";
import SearchBar from "./components/SearchBar";
import CategoryFilter from "./components/CategoryFilter";
import MealGrid from "./components/MealGrid";
import MealModal from "./components/MealModal";
import Loader from "./components/Loader";
import './App.css'

export default function App() {
  const [search, setSearch] = useState("");
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null);
  const [category, setCategory] = useState("");
  const fetchMeals = async (query) => {
    setLoading(true);
    setCategory(""); 
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?s=${query}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };


  const fetchByCategory = async (cat) => {
    setCategory(cat);
    setLoading(true);
    const res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/filter.php?c=${cat}`
    );
    const data = await res.json();
    setMeals(data.meals || []);
    setLoading(false);
  };

  useEffect(() => {
    const loadInitialMeals = async () => {
      setLoading(true);

      const res = await fetch(
        "https://www.themealdb.com/api/json/v1/1/search.php?s="
      );
      const data = await res.json();

      setMeals(data.meals || []);
      setLoading(false);
    };

    loadInitialMeals();
  }, []);

  return (
<div className="min-h-screen bg-gray-900 p-6 text-white">
      <h1 className="text-3xl font-bold text-center mb-6">
        🍽️ Meal Finder
      </h1>

      <SearchBar
        value={search}
        onChange={setSearch}
        onSearch={() => fetchMeals(search)}
      />

      <CategoryFilter
        active={category}
        onSelect={fetchByCategory}
      />

      {loading && <Loader />}

      <MealGrid
        meals={meals}
        onSelect={setSelectedMeal}
      />

      {selectedMeal && (
        <MealModal
          meal={selectedMeal}
          onClose={() => setSelectedMeal(null)}
        />
      )}
    </div>
  );
}
