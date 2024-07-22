import React from "react";
import "./App.css";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import Header from "./Components/Header";
import { useRoutes } from "react-router-dom";
import routes from "./routes";
import {cartContextProvider} from './Context/cartContext'

function App() {
  const router = useRoutes(routes);

  return (
    <cartContextProvider>
    <div className="app">
      <Header />
      {/* Start Content */}

      {router}

      {/* Finish Content */}

      <footer>
        <a target={"_blank"} href="https://sabzlearn.ir">
          Sabzlearn.ir
        </a>
      </footer>
    </div>
    </cartContextProvider>
  );
}

export default App;
