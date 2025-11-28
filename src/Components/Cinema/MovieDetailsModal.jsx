import React from "react";

const MovieDetailsModal = ({ movie, onClose, onCartAdd }) => {
  if (!movie) return null; // If no movie selected, don't render

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 bg-black/60 backdrop-blur-sm text-white">
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-[420px] sm:max-w-[600px] lg:max-w-[984px] p-4 max-h-[90vh] overflow-auto">
        <div className="bg-white shadow-md dark:bg-[#12141D] rounded-2xl sm:grid sm:grid-cols-[2fr_1fr] overflow-hidden">
          {/* Movie Cover */}
          <img
            className="sm:order-2 w-full object-cover h-full max-sm:max-h-[300px]"
            src={movie.cover}
            alt={movie.title}
          />

          <div className="p-5 lg:p-11">
            {/* Title & Genre */}
            <div>
              <h2 className="text-3xl lg:text-[50px] mb-2 font-bold">
                {movie.title}
              </h2>
              <span className="block text-base text-[#9fa0a4] dark:text-[#575A6E] my-3">
                {movie.genre}
              </span>
            </div>

            {/* Description */}
            <p className="text-sm lg:text-base mb-8 lg:mb-16">
              {movie.description}
            </p>

            {/* Buttons */}
            <div className="grid lg:grid-cols-2 gap-4 mt-4">
              {/* Add to Cart Button */}
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  onCartAdd(movie);
                }}
                className="
      bg-linear-to-r from-yellow-400 via-yellow-300 to-yellow-500
      text-black font-bold
      rounded-xl py-3 px-6
      flex items-center justify-center gap-2
      shadow-lg hover:scale-105 hover:shadow-2xl
      transition-all duration-300
    "
              >
                <img src="../assets/tag.svg" alt="tag" className="w-5 h-5" />
                <span>${movie.price} | Add to Cart</span>
              </button>

              {/* Cancel Button */}
              <button
                onClick={onClose}
                className="
      border border-gray-500 dark:border-gray-400
      text-gray-700 dark:text-gray-200
      rounded-xl py-3 px-6
      flex items-center justify-center gap-2
      hover:bg-gray-100 dark:hover:bg-gray-700
      transition-colors duration-300
    "
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

export default MovieDetailsModal;
