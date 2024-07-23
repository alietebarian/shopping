import React from "react";
import "./App.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import CartContextProvider from "./context/cartContext";
function App() {
  const router = useRoutes(routes);

  return (
    <CartContextProvider>
      <div className="app">
        <Header />

        {router}
        
      </div>
    </CartContextProvider>
  );
}

export default App;
