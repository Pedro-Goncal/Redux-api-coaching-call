export const userReducer = (state = {}, action) => {
  switch (action.type) {
    //REGISTER USER
    case "USER_REGISTER_REQUEST":
      return { loading: true };
    case "USER_REGISTER_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };
    case "USER_REGISTER_FAIL":
      return { loading: false, error: action.payload };

    //LOGIN USER
    case "USER_LOGIN_REQUEST":
      return { loading: true };
    case "USER_LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload, error: null };
    case "USER_LOGIN_FAIL":
      return { loading: false, error: action.payload };
    //GET ALL USER

    //LOGOUT
    case "USER_LOGOUT":
      return {};

    default:
      return state;
  }
};
