import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";

//Reducers
import { userReducer } from "./reducers/userReducer";
// import { cartReducer } from  './reducers/cartReducers'

const reducers = combineReducers({
  user: userReducer,
  //   cart: cartReducer
});

//Get info from local storage
//=============================================================
const userInfoFromStorage = localStorage.getItem("userInfo")
  ? JSON.parse(localStorage.getItem("userInfo"))
  : null;

const initialState = {
  user: { userInfo: userInfoFromStorage },
};

//============================================================

const middleware = [thunk];

const store = createStore(
  reducers,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
