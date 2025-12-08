import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logout());
    navigate("/login");
  };

  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="font-bold">Homecooked</h1>

      {token && (
        <button
          onClick={handleLogout}
          className="bg-red-600 px-4 py-1 rounded"
        >
          Logout
        </button>
      )}
    </div>
  );
}

export default Navbar;
