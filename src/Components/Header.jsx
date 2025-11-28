import React, { useContext, useState } from "react";
import logo from "../assets/logo.svg";
import ring from "../assets/ring.svg";
import sun from "../assets/sun.svg";
import cart from "../assets/shopping-cart.svg";
import CartDetails from "./Cinema/CartDetails";
import movieContext from "../Context/index";

const Header = () => {
  const [showCart, setShowCart] = useState(false);
  const { cartData } = useContext(movieContext);
  console.log(cartData);
  return (
    <header>
      {showCart && (
        <CartDetails onClose={() => setShowCart(false)} cartItems={cartData} />
      )}
      <nav
        className="container flex it
      ems-center justify-between space-x-10 py-6"
      >
        <a href="/">
          <img src={logo} width="139" height="26" alt="Logo" />
        </a>

        {/* Right Icons */}
        <ul className="flex items-center space-x-5">
          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={ring} width="24" height="24" alt="Notification" />
            </a>
          </li>

          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
            >
              <img src={sun} width="24" height="24" alt="Theme Toggle" />
            </a>
          </li>

          <li>
            <a
              className="bg-primary/20 dark:bg-primary/[7%] rounded-lg backdrop-blur-[2px] p-1 inline-block"
              href="#"
              onClick={() => setShowCart(true)}
            >
              <img src={cart} width="24" height="24" alt="Cart" />
              {cartData.length > 0 && (
                <span className="absolute top-4 right-4 inline-flex items-center justify-center px-2 py-1 text-xs font-bold leading-none text-red-100 bg-red-600 rounded-full">
                  {cartData.length}
                </span>
              )}
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
