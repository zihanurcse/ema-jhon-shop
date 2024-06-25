import "./Header.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { authContext } from "../../Provider/AuthProvider";

const Header = () => {
  const { user, logOut } = useContext(authContext);

  //signout handler
  const handleSignOut = () => {
    logOut()
      .then(() => console.log("logout"))
      .catch((error) => console.log(error));
  }

  return (
    <div className="header-container">
      <img src={logo} alt="" />
      <ul>
        <li>
          <Link to='/'>Shop</Link>
        </li>
        <li>
          <Link to='/order'>Order Review</Link>
        </li>
        <li>
          <Link to='/manage'>Manage Inventory</Link>
        </li>
        {
          user ? (<li>
            <Link onClick={handleSignOut}>LogOut</Link>
          </li>
          ) : (<li>
            <Link to='/login'>Login</Link>
          </li>)
        }

      </ul>
    </div>
  );
};

export default Header;
