import { useDispatch } from "react-redux";
import { getLogout } from "../../redux/actions";

import "./logout.scss";

const Logout = () => {
  const dispatch = useDispatch();
  return (
    <div className="logout">
      <button
        type="button"
        className="btn"
        onClick={() => dispatch(getLogout())}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Logout;
