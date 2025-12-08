import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login } from "../../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Login() {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { isLoading, isError, message, token, user } = useSelector(
        (state) => state.auth
    );


    const [formData, setFormData] = useState({
        email: "",
        password: "",
    });

    useEffect(() => {
        if (token && user && user.role) {
            switch (user.role) {
                case "ADMIN":
                    navigate("/admin/dashboard");
                    break;
                case "CHEF":
                    navigate("/chef/dashboard");
                    break;
                case "DELIVERY":
                    navigate("/delivery/dashboard");
                    break;
                case "CUSTOMER":
                    navigate("/customer/dashboard");
                    break;
                default:
                    navigate("/login"); // fallback
            }
        }
    }, [token, user, navigate]);




    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(login(formData));
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100">
            <form
                onSubmit={handleSubmit}
                className="bg-white p-8 rounded-lg shadow-md w-96"
            >
                <h2 className="text-2xl font-bold mb-4 text-center">Login</h2>

                {isError && <p className="text-red-500 text-sm">{message}</p>}

                <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    className="w-full p-2 border rounded mt-2"
                    onChange={handleChange}
                    required
                />

                <input
                    type="password"
                    name="password"
                    placeholder="Password"
                    className="w-full p-2 border rounded mt-2"
                    onChange={handleChange}
                    required
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white p-2 rounded mt-4"
                >
                    {isLoading ? "Logging in..." : "Login"}
                </button>

                <p className="text-sm mt-3 text-center">
                    Don't have an account?{" "}
                    <span
                        className="text-blue-600 cursor-pointer"
                        onClick={() => navigate("/register")}
                    >
                        Register
                    </span>
                </p>
            </form>
        </div>
    );
}

export default Login;
