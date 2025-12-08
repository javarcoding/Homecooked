import { useDispatch, useSelector } from "react-redux";
import { setCredentials, logout } from "../redux/slices/authSlice";

function TestReduxAuth() {
  const dispatch = useDispatch();
  const { user, token, isAuthenticated } = useSelector((state) => state.auth);

  const handleLogin = () => {
    dispatch(
      setCredentials({
        user: { email: "test@gmail.com" },
        token: "dummy-token",
        role: "CUSTOMER",
      })
    );
  };

  return (
    <div className="p-5">
      <h1 className="text-xl font-bold">Redux Auth Test</h1>

      <button
        className="bg-blue-600 text-white p-2 m-2"
        onClick={handleLogin}
      >
        Test Login
      </button>

      <button
        className="bg-red-600 text-white p-2 m-2"
        onClick={() => dispatch(logout())}
      >
        Logout
      </button>

      <pre>{JSON.stringify({ user, token, isAuthenticated }, null, 2)}</pre>
    </div>
  );
}

export default TestReduxAuth;
