import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllChefs } from "../../redux/slices/chefSlice";
import ChefCard from "../../components/ChefCard";

function ChefList() {
  const dispatch = useDispatch();
  const { chefs, isLoading } = useSelector((state) => state.chef);

  useEffect(() => {
    dispatch(getAllChefs());
  }, [dispatch]);

  return (
    <div className="max-w-6xl mx-auto p-10">
      <h2 className="text-3xl font-bold text-center mb-6">
        Our Chefs
      </h2>

      {isLoading && <p className="text-center">Loading chefs...</p>}

      <div className="grid md:grid-cols-3 gap-6">
        {chefs.map((chef) => (
          <ChefCard key={chef.id} chef={chef} />
        ))}
      </div>
    </div>
  );
}

export default ChefList;
