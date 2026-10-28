import React, { useState, useEffect } from "react";
import Footer from "./footer/footer";
import Header from "./header/header";
import { Route, Routes } from "react-router-dom";

import CounterP from "./CounterP";
import Contact from "./Contact";
import Courses from "./Courses";
import About from "./About";
import Offline from "./Offline";
import Online from "./Online";
import Error404 from "./Error404";
import Product from "./Product";
import Home from "./Home";

const Dashboard = () => {

  // Text box state
  const [text, setText] = useState("");

  // Text box useEffect
  useEffect(() => {
    console.log("Text changed:", text);
  }, [text]);

  // Timer state
  const [time, setTime] = useState(new Date());

  // Timer useEffect
  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  // Get username from localStorage
  const username = localStorage.getItem("username");

  return (
    <div className="container">

      {/* Timer + Username */}
      <div
        style={{
          position: "fixed",
          top: "10px",
          right: "10px",
          padding: "10px",
          backgroundColor: "black",
          color: "white",
          borderRadius: "5px",
        }}
      >
        {username} | {time.toLocaleTimeString()}
      </div>

      {/* Header */}
      <Header />

      {/* Text Box */}
      <div>
        <h2>Text Box</h2>

        <input
          type="text"
          placeholder="Enter your text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />

        <h3>You typed: {text}</h3>
      </div>

      {/* All Routes */}
      <Routes>

        <Route path="/" element={<Home />} />

        <Route path="/courses" element={<Courses />}>
          <Route index element={<Offline />} />
          <Route path="offline" element={<Offline />} />
          <Route path="online" element={<Online />} />
        </Route>

        <Route path="/counter" element={<CounterP />} />

        <Route path="/product" element={<Product />} />

        <Route path="/contact" element={<Contact />} />

        <Route
          path="/about"
          element={<About info="This is props by routes" />}
        />

        <Route path="*" element={<Error404 />} />

      </Routes>

      {/* Footer */}
      <Footer />

    </div>
  );
};

export default Dashboard;