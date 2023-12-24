import React from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

// Home component
const Home = () => <p className="h3">Home</p>;

// About component
const About = () => <p className="h3">About</p>;

// ReactRouter component
const ReactRouter = () => {
  return (
    <Router>
      <div>
        <nav>
          {/* Link to navigate to Home */}
          <Link to="/" className="h4">
            Home
          </Link>
          {" | "}
          {/* Link to navigate to About */}
          <Link to="/about" className="h4">
            About
          </Link>
        </nav>

        <Routes>
          {/* Route to render Home component when the path is '/' */}
          <Route path="/" element={<Home />} />

          {/* Route to render About component when the path is '/about' */}
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </Router>
  );
};

export default ReactRouter;
