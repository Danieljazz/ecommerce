import { loginStart, loginSuccess, loginError } from "./userRedux";
import { useSelector } from "react-redux";
import axios from "axios";

const login = async (dispatch, user) => {
  try {
    dispatch(loginStart());
    const res = await axios.post(
      `${process.env.REACT_APP_SERVER}/api/auth/login`,
      user,
    );
    dispatch(loginSuccess(res.data));
  } catch {
    dispatch(loginError());
  }
};

export default login;
