function ChefCard({ chef }) {
  return (
    <div className="bg-white p-4 shadow rounded-lg text-center">
      <img
        src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png"
        alt="chef"
        className="w-24 h-24 mx-auto mb-3 rounded-full"
      />
      <h3 className="text-lg font-bold">{chef.name}</h3>
      <p className="text-gray-500 text-sm">{chef.email}</p>
      <p className="text-gray-500 text-sm">{chef.phone}</p>

      <button className="mt-3 bg-green-600 text-white px-4 py-1 rounded">
        View Meals
      </button>
    </div>
  );
}

export default ChefCard;
