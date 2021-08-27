import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import Loader from "./Loader";

//REDUX
import { useDispatch, useSelector } from "react-redux";
import { register } from "../redux/actions/userActions";

const Register = ({ history }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [message, setMessage] = useState("");

  const dispatch = useDispatch();

  const { loading, error, userInfo } = useSelector((state) => state.user);

  useEffect(() => {
    if (userInfo) {
      history.push("/");
    }
  }, [history, userInfo]);

  const submitHandler = (e) => {
    e.preventDefault();

    if (password !== confirmPassword) {
      setMessage("Passwords do not match");
      setTimeout(() => setMessage(""), 3000);
    } else {
      dispatch(register(email, password));
    }
  };

  return (
    <div>
      <h1>Register with us</h1>
      <form type="submit" onSubmit={submitHandler}>
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
        <div>
          <lable>Confirm Password</lable>
        </div>
        <div>
          <input
            type="password"
            placeholder="Please confirm your password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
        </div>
        <button type="submit">Register</button>
      </form>
      <Link to="/login">
        <p>Already register click here to login</p>
      </Link>
      <div>{loading && <Loader />}</div>
      <div>{message && <p>{message}</p>}</div>
      <div>{error && <p>{error.message}</p>}</div>
    </div>
  );
};

export default Register;
