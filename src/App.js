import React from "react";
import "./styles.css";
import Navbar from "./Navbar";
import Jumbotron from "./Jumbotron";
import PortfolioSection from "./PortfolioSection";

const App = () => {
  return (
    <div>
      <Navbar />
      <Jumbotron />
      <PortfolioSection />
    </div>
  );
};

export default App;
