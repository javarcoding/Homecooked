import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { logout } from "../redux/slices/authSlice";
import { isTokenExpired } from "../utils/tokenUtils";
import { useNavigate } from "react-router-dom";

export const useAutoLogout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { token } = useSelector((state) => state.auth);

  useEffect(() => {
    if (token && isTokenExpired(token)) {
      dispatch(logout());
      navigate("/login");
    }
  }, [token, dispatch, navigate]);
};
