import { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";
import { logout } from "../redux/actions/userActions";

const Home = ({ history }) => {
  const { userInfo } = useSelector((state) => state.user);

  const dispatch = useDispatch();

  useEffect(() => {
    if (!userInfo) {
      history.push("/login");
    }
  });

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <div>
      <h1>Hello there</h1>
      <button onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Home;
