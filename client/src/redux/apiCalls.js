import { loginStart, loginSuccess, loginError } from "./userRedux";
import { useSelector } from "react-redux";
import axios from "axios";

const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await axios.post("http://localhost:5000/api/auth/login", user);
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginError());
  }
};

export default login;
