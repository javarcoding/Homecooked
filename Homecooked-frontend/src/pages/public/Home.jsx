import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMeals } from "../../redux/slices/menuSlice";
import MealCard from "../../components/MealCard/MealCard";

function Home() {
  const dispatch = useDispatch();
  const { meals, isLoading, isError } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getFeaturedMeals());
  }, [dispatch]);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <section className="text-center py-16 bg-green-100">
        <h1 className="text-4xl font-bold">Homecooked</h1>
        <p className="mt-2 text-lg">Smart Tiffin Service Platform</p>
      </section>

      {/* Featured Meals Section */}
      <section className="max-w-6xl mx-auto py-12 px-4">
        <h2 className="text-3xl font-bold mb-6 text-center">
          Featured Meals
        </h2>

        {isLoading && <p className="text-center">Loading meals...</p>}

        {isError && (
          <p className="text-center text-red-500">
            Failed to load meals. Try again later.
          </p>
        )}

        <div className="grid md:grid-cols-3 gap-6">
          {meals.map((meal) => (
            <MealCard key={meal.id} meal={meal} />
          ))}
        </div>
      </section>
    </div>
  );
}

export default Home;
