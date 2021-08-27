import axios from "axios";

//REGISTER USER ACTION

export const register = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_REGISTER_REQUEST",
    });

    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://reqres.in/api/register",
      { email, password },
      config
    );

    dispatch({
      type: "USER_REGISTER_SUCCESS",
      payload: { id: data.id, email, token: data.token },
    });
  } catch (error) {
    dispatch({
      type: "USER_REGISTER_FAIL",
      payload: error,
    });
  }
};

//LOGIN USER ACTION

export const login = (email, password) => async (dispatch) => {
  try {
    dispatch({
      type: "USER_LOGIN_REQUEST",
    });

    //  API FOR LOGIN
    //===================================
    const config = {
      header: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "https://reqres.in/api/login",
      { email, password },
      config
    );
    //===================================

    dispatch({
      type: "USER_LOGIN_SUCCESS",
      payload: { email, token: data.token },
    });

    localStorage.setItem(
      "userInfo",
      JSON.stringify({ email, token: data.token })
    );
  } catch (error) {
    dispatch({
      type: "USER_LOGIN_FAIL",
      payload: error,
    });
  }
};
export const logout = () => (dispatch) => {
  //Cleaning localstorage
  localStorage.removeItem("userInfo");

  //Dispatching USER_LOGOUT
  dispatch({
    type: "USER_LOGOUT",
  });
};
