function MealCard({ meal }) {
  return (
    <div className="bg-white rounded-lg shadow-md p-4 hover:shadow-xl transition">
      <img
        src={meal.imageUrl || "https://via.placeholder.com/150"}
        alt={meal.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h3 className="text-lg font-bold">{meal.name}</h3>
      <p className="text-gray-600 text-sm">{meal.description}</p>
      <p className="text-green-600 font-semibold mt-2">₹{meal.price}</p>
    </div>
  );
}

export default MealCard;
