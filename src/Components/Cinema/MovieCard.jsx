import React, { useContext, useState } from "react";
import MovieDetailsModal from "./MovieDetailsModal";
import movieContext from "../../Context/index";

// Import Toastify
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const MovieCard = ({ movie }) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedMovie, setSelectedMovie] = useState(null);

  const handleModalClose = () => {
    setSelectedMovie(null);
    setShowModal(false);
  };

  const handleMovieSelection = (movie) => {
    setSelectedMovie(movie);
    setShowModal(true);
  };

  const { state, dispatch } = useContext(movieContext);

  const handleAddToCart = (movie) => {
    const found = state.cartData.find((item) => item.id === movie.id);

    if (found) {
      toast.info(`${movie.title} is already in the cart!`, {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
      return;
    }

    // setCartData((prevCartData) => [...prevCartData, movie]);
    dispatch({
      type: "ADD_TO_CART",
      payload: {
        ...movie,
      },
    });
    toast.success(`${movie.title} added to cart!`, {
      position: "top-right",
      autoClose: 3000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
    });
  };

  return (
    <>
      {showModal && (
        <MovieDetailsModal
          movie={selectedMovie}
          onClose={handleModalClose}
          onCartAdd={handleAddToCart}
        />
      )}
      <figure className="p-4 border border-black/10 shadow-sm dark:border-white/10 rounded-xl cursor-pointer">
        <div onClick={() => handleMovieSelection(movie)}>
          {/* Cover Image */}
          <img
            className="w-full object-cover"
            src={movie.cover}
            alt={movie.title}
          />

          <figcaption className="pt-4">
            <h3 className="text-xl mb-1">{movie.title}</h3>
            <p className="text-[#575A6E] text-sm mb-2">{movie.genre}</p>

            {/* Rating Stars */}
            <div className="flex items-center space-x-1 mb-5">
              {Array.from({ length: movie.rating }).map((_, i) => (
                <img
                  key={i}
                  src="../assets/star.svg"
                  width="14"
                  height="14"
                  alt="star"
                />
              ))}
            </div>

            {/* Add to Cart Button */}
            <button
              onClick={(e) => {
                e.stopPropagation();
                handleAddToCart(movie);
              }}
              className="
                bg-primary 
                rounded-lg 
                py-2 px-5 
                flex items-center justify-center gap-2 
                text-[#171923] font-semibold text-sm
                shadow-sm border border-black/50
                hover:shadow-md hover:scale-[1.02]
                transition-all duration-200
              "
            >
              <img src="../assets/tag.svg" alt="" />
              <span>${movie.price} | Add to Cart</span>
            </button>
          </figcaption>
        </div>
      </figure>
    </>
  );
};

export default MovieCard;
