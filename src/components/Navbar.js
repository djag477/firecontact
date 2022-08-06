import { useContext } from "react";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { logOut } from "../auth/firebase";

const Navbar = () => {
  const navigate = useNavigate();
  const {currentUser} = useContext(AuthContext);

  console.log("currentUser in Navbar",currentUser)

  return (
    <div>
      <nav>
        <div>
          <Link to={"/"}>
            <h4>React Contact List App</h4>
          </Link>
          <div>
            {currentUser ? (
              <h5>{currentUser?.displayName}</h5>
            ) : (
              <button type="button" onClick={() => navigate("/")}>
                Login
              </button>
            )}
            {currentUser ? (
              <button
                type="button"
                onClick={() => {
                  logOut();
                  navigate("/");
                }}
              >
                Logout
              </button>
            ) : (
              <button type="button" onClick={() => navigate("/register")}>
                Register
              </button>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
