import AppRoutes from "./routes/AppRoutes";
import { useAutoLogout } from "./hooks/useAutoLogout";

// import { useEffect } from "react";
// import { useDispatch } from "react-redux";
// import { fetchUser } from "./redux/actions/authActions";

function App() {

  console.log("API URL:", import.meta.env.VITE_API_BASE_URL);

  // const dispatch = useDispatch();

  // useEffect(() => {
    
  //   const token = localStorage.getItem("token");
  //   if (token) {
  //     dispatch(fetchUser(token));
  //   }
  // }, [dispatch]);
  useAutoLogout();

  return <AppRoutes />;
}

export default App;
