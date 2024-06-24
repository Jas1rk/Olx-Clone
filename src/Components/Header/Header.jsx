import React, { useContext } from "react";
import "./Header.css";
import OlxLogo from "../../assets/OlxLogo";
import Search from "../../assets/Search";
import Arrow from "../../assets/Arrow";
import SellButton from "../../assets/SellButton";
import SellButtonPlus from "../../assets/SellButtonPlus";
import { userContext } from "../../Storage/userContext";
import { Link, useNavigate } from "react-router-dom";

const Header = () => {
  const { user } = useContext(userContext);
  const navigate = useNavigate()

  const handleSell = () => {
    user ? navigate('/create') : navigate('/login')
  }
  return (
    <div className="headerParent">
      <div className="headerChildDiv">
        <div className="brandName">
          <OlxLogo />
        </div>
        <div className="placeSearch">
          <Search />
          <input type="text" />
          <Arrow />
        </div>
        <div className="productSearch">
          <div className="input">
            <input
              type="text"
              placeholder="Find car,mobile phone and more..."
            />
          </div>
          <div className="searchAction">
            <Search color="#ffffff" />
          </div>
        </div>

        <div className="language">
          <span>ENGLISH</span>
          <Arrow />
        </div>

        <div className="loginPage">
          {user ? (
            <Link to={"/profile"}>
              <span>Profile</span>
            </Link>
          ) : (
            <Link to={"/login"}>
              <span>Login</span>
            </Link>
          )}
          <hr />
        </div>

        <div className="sellMenu" onClick={handleSell}>
          <SellButton />
          <div className="sellMenuCotent">
            <SellButtonPlus />
            <span>SELL</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
