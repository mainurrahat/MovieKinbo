#🎬 CinemaHub – Movie Store 

CinemaHub is a modern, responsive movie store web application built using React, Context API, useReducer, and Tailwind CSS v4.
Users can browse movies, view details, add movies to the cart, remove items, delete all, and checkout smoothly with toast notifications.

🚀 Live Demo

👉  https://movie-kinbo.vercel.app/


⭐ Features
🛒 Cart System (Context + Reducer Powered)

Add to cart

Remove a single movie

Delete all movies

Check out with the total price

Real-time toast notifications

🎥 Movie Management

Browse movies

Filter movies (optional if added)

View detailed movie page

Responsive movie cards


Smooth transitions

📱 Fully Responsive

Mobile-first design

Beautiful UI with Tailwind v4

🏗️ Tech Stack
Category	Tech
Frontend	React (Vite)
State Management	Context API + useReducer
UI Framework	Tailwind CSS v4
Components	Reusable & Modular
Notifications	React-Toastify
Icons	React Icons
📂 Project Structure
src/
│

├── Components/

│   ├── Cinema/

│   │   ├── CartDetails.jsx

│   │   ├── MovieCard.jsx

│   │   ├── MovieDetails.jsx

│   │   ├── MovieList.jsx

│   │   ├── Header.jsx

│   │   ├── Footer.jsx

│   │   └── Sidebar.jsx

│
├── Context/

│   └── index.js

│
├── Data/

│   └── Movies.js

│
├── Reducer/

│   └── CartReducer.js

│
├── App.jsx

├── main.jsx

├── index.css

└── App.css

⚙️ State Management Flow (Context + Reducer)
Reducer Actions

ADD_TO_CART

REMOVE_FROM_CART

CLEAR_CART
```
Example: Remove Movie
dispatch({
  type: "REMOVE_FROM_CART",
  payload: { id },
});
```
```
Example: Add Movie
dispatch({
  type: "ADD_TO_CART",
  payload: movie,
});
```

🏠 Home Page

🎬 Movie Details

🛒 Cart Modal

🔧 Installation & Setup
# Clone the repo
```
git clone https://github.com/mainurrahat/MovieKinbo
```
# Navigate to project
```
cd cinema-hub
```
# Install dependencies
```
npm install
```

# Run development server
```
npm run dev
```
 
🔥 Why Context + Reducer?
useState	useReducer
Simple	Complex logic
Works locally, Centralized state
No global sharing	Works with Context
Not scalable,	Perfect for cart systems

Using both together gives:

Global state

Predictable state updates

Cleaner code

No need for Redux

🧪 Future Improvements

Movie search & filter

Wishlist system

Auth (Login/Register)

Backend movie API

Payment gateway simulation

🤝 Contributing

Pull requests are welcome!
Please open an issue to discuss major changes.

📄 License

MIT License © 2025 – Mainur Islam Rahat
