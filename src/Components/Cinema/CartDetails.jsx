import React, { useContext } from "react";
import movieContext from "../../Context/index";
import { toast } from "react-toastify";

const CartDetails = ({ cartItems = [], onClose }) => {
  const { cartData, setCartData } = useContext(movieContext);

  const handleDeleteMovie = (id) => {
    const found = cartData.find((item) => item.id === id);

    if (!found) {
      toast.error("Movie not found!");
      return;
    }

    const updated = cartData.filter((item) => item.id !== id);
    setCartData(updated);

    toast.success("Movie removed from cart!");
  };

  const handleDeleteAll = () => {
    if (cartData.length === 0) {
      toast.warning("Your cart is already empty!");
      return;
    }

    setCartData([]); // Clear everything
    toast.success("All movies removed from cart!");
  };

  const handleCheckout = () => {
    if (cartData.length === 0) {
      toast.warning("Your cart is empty!");
      return;
    }

    const total = cartData.reduce((sum, item) => sum + item.price, 0);
    setCartData([]); // Clear cart after checkout
    toast.success(`Checkout successful! Total: $${total}`);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm text-white">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[790px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl overflow-hidden p-5 md:p-9">
          {/* Title */}
          <h2 className="text-2xl lg:text-[30px] mb-10 font-bold">
            Your Carts
          </h2>

          {/* Cart Items */}
          <div>
            <div className="space-y-8 lg:space-y-12 max-h-[450px] overflow-auto mb-10 lg:mb-14">
              {cartItems.length === 0 ? (
                <p className="text-center text-white">Your cart is empty.</p>
              ) : (
                cartItems.map((item, index) => (
                  <div key={index} className="grid grid-cols-[1fr_auto] gap-4">
                    <div className="flex items-center gap-4 text-white">
                      <img
                        className="rounded overflow-hidden w-20 h-20 object-cover"
                        src={item.cover}
                        alt={item.title}
                      />
                      <div>
                        <h3 className="text-white md:text-xl font-bold">
                          {item.title}
                        </h3>
                        <p className="max-md:text-xs text-white">
                          {item.genre}
                        </p>
                        <span className="max-md:text-xs">${item.price}</span>
                      </div>
                    </div>

                    <div className="flex justify-between gap-4 items-center">
                      <button
                        onClick={() => handleDeleteMovie(item.id)}
                        className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
                      >
                        <img
                          className="w-5 h-5"
                          src="../assets/delete.svg"
                          alt="delete"
                        />
                        <span className="max-md:hidden">Remove</span>
                      </button>
                    </div>
                  </div>
                ))
              )}
            </div>

            {/* Checkout + Delete All + Cancel Buttons */}
            <div className="flex items-center justify-end gap-2">
              {/* Checkout */}
              <button
                onClick={handleCheckout}
                className="bg-primary rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
              >
                <img
                  src="../assets/checkout.svg"
                  width="24"
                  height="24"
                  alt="checkout"
                />
                <span className="max-md:hidden">Checkout</span>
              </button>

              {/* Delete All */}
              <button
                onClick={handleDeleteAll}
                className="bg-[#D42967] rounded-md p-2 md:px-4 inline-flex items-center space-x-2 text-white"
              >
                <img
                  className="w-5 h-5"
                  src="../assets/delete.svg"
                  alt="delete"
                />
                <span className="max-md:hidden">Delete All</span>
              </button>

              {/* Cancel */}
              <button
                onClick={onClose}
                className="border border-[#74766F] rounded-lg py-2 px-5 flex items-center justify-center gap-2 text-[#6F6F6F] dark:text-gray-200 font-semibold text-sm"
              >
                Cancel
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartDetails;
