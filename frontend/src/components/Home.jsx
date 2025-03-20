import React from "react";
import "./Navbar.css"; // Import du fichier CSS
import { Link } from "react-router";
import Login from "./Login";

function Home() {
  return (
    <div>
      {/* Conteneur de l'image avec texte superposé */}
      <div style={{ height: "92vh" }} className="image-container">
        <img
          style={{ height: "100vh" }}
          src="/Chat1.jpg"
          className="header-image"
        />
        <div className="image-text">
          <h2>Bienvenue sur Adopt Me</h2>
          <p>
            Des milliers d’animaux attendent une famille aimante. Faites
            ladifférence dès aujourd’hui !
          </p>
          <div className="buttons">
            <Link to={"/Login"}>
              <button className="connecter">se connecter</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;
