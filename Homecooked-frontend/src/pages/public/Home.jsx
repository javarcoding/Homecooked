import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="min-h-screen bg-gray-50">
      <section className="text-center py-20 bg-green-100">
        <h1 className="text-4xl font-bold mb-4">Welcome to Homecooked</h1>
        <p className="text-lg mb-6">Smart Tiffin Service Platform</p>
        <Link
          to="/register"
          className="bg-green-600 text-white px-6 py-3 rounded hover:bg-green-700"
        >
          Get Started
        </Link>
      </section>

      <section className="py-20 px-4 max-w-5xl mx-auto">
        <h2 className="text-3xl font-semibold mb-4 text-center">Our Services</h2>
        <p className="text-center text-gray-700">
          Enjoy freshly homecooked meals delivered to your doorstep. Choose your favorite chef and meals.
        </p>
      </section>
    </div>
  );
}

export default Home;
