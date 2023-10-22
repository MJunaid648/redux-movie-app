import React from "react";
import { Link } from "react-router-dom";
import userImg from "../../images/user-image.png";
import "./header.scss";

const Header = () => {
  return (
    <div className="header">
      <Link to="/">
        <div className="logo">Movie App</div>
      </Link>
      <div className="user-image">
        <img src={userImg} alt="`user image" />
      </div>
    </div>
  );
};

export default Header;
