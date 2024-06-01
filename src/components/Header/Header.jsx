import "./Header.css";
import logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Header = () => {
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
        <li>
        <Link to='/login'>Login</Link>
        </li>
      </ul>
    </div>
  );
};

export default Header;
