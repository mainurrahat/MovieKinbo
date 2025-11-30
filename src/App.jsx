/* eslint-disable no-unused-vars */
import { useReducer, useState } from "react";
import "./App.css";
import MovieList from "./Components/Cinema/MovieList";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Sidebar from "./Components/Sidebar";
import movieContext from "./Context/index";
// Import Toastify
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { cartReducer, initialState } from "./Reducer/CartReducer";

function App() {
  // const [cartData, setCartData] = useState([]);
  const [state, dispatch] = useReducer(cartReducer, initialState);
  return (
    <movieContext.Provider value={{ state, dispatch }}>
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
