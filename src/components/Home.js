import React from "react";
import "./styles/Home.css";
import backgroundImage from "./alice2.webp"; // <-- make sure this path matches your folder structure

function Home() {
  return (
    <section
      id="home"
      className="home"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="overlay"></div>
      <div className="content">
        <h2>Welcome to My Website</h2>
        <p>
          Hi, my name is Lydielen, and this is my portfolio for web development.
          Here, you’ll find my projects, skills, and passion for creating clean,
          user-friendly websites.
        </p>
      </div>
    </section>
  );
}

export default Home;
