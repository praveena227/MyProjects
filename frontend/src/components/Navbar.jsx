import React, { useState } from "react";
import { data } from "../restApi.json";
import { Link } from "react-scroll";
import { GiHamburgerMenu } from "react-icons/gi";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const goToMenu = () => {
    navigate("/menu"); // Navigate to the menu page
  };

  return (
    <>
      <nav>
        <div><img src="https://d1tgh8fmlzexmh.cloudfront.net/ccbp-responsive-website/food-munch-img.png" class = "food-munch-logo"/></div>
        <div className="logo"></div>
        <div className={show ? "navLinks showmenu" : "navLinks"}>
          <div className="links">
            {data[0].navbarLinks.map((element) => (
              <Link
                to={element.link}
                spy={true}
                smooth={true}
                duration={500}
                key={element.id}
              >
                {element.title}
              </Link>
            ))}
          </div>
          <button className="menuBtn" onClick={goToMenu}>
            OUR MENU
          </button>
        </div>
        <div className="hamburger" onClick={() => setShow(!show)}>
          <GiHamburgerMenu />
        </div>
      </nav>
    </>
  );
};

export default Navbar;