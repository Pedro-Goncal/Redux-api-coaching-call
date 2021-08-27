import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { login } from "../redux/actions/userActions";

import Loader from "./Loader";

const Login = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();
    dispatch(login(email, password));
  };

  return (
    <div>
      <h1>Sign In</h1>
      <form type="Submit" onSubmit={submitHandler}>
        <div>
          <lable>Email</lable>
        </div>

        <div>
          <input
            type="email"
            placeholder="PLease enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <lable>Password</lable>
        </div>

        <div>
          <input
            type="password"
            placeholder="Please enter a password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
      <Link to="/register">
        <p>Not yet register with us click here</p>
      </Link>
      <div>{loading && <Loader />}</div>
      <div>{error && <p>{error.message}</p>}</div>
    </div>
  );
};

export default Login;
