import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFeaturedMeals } from "../redux/slices/menuSlice";

function TestMeals() {
  const dispatch = useDispatch();
  const { meals, isLoading } = useSelector((state) => state.menu);

  useEffect(() => {
    dispatch(getFeaturedMeals());
  }, [dispatch]);

  return (
    <div className="p-10">
      <h2 className="text-2xl font-bold mb-4">Featured Meals</h2>

      {isLoading && <p>Loading...</p>}

      <div className="grid grid-cols-3 gap-4">
        {meals.map((meal) => (
          <div key={meal.id} className="border p-4 rounded shadow">
            <h3 className="font-bold">{meal.name}</h3>
            <p>{meal.description}</p>
            <p className="text-green-600">₹{meal.price}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TestMeals;
