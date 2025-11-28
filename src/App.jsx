/* eslint-disable no-unused-vars */
import { useState } from "react";
import "./App.css";
import MovieList from "./Components/Cinema/MovieList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import movieContext from "./Context/index";

// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const [cartData, setCartData] = useState([]);

  return (
    <movieContext.Provider value={{ cartData, setCartData }}>
      <div className="min-h-screen">
        <Header />
        <div className="flex gap-5">
          <Sidebar />
          <MovieList />
        </div>
        <Footer />
      </div>

      {/* Toast container for showing toasts */}
      <ToastContainer
        position="top-right"
        autoClose={3000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        pauseOnHover
        draggable
        theme="light"
      />
    </movieContext.Provider>
  );
}

export default App;
