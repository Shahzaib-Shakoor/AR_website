import React, { useRef, useState } from "react";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import logo from "./logo.png";
import "./App.css";
import MenuIcon from "@mui/icons-material/Menu";
import { MapContainer, TileLayer } from "react-leaflet";
import osm from "./osm.providers";
import "leaflet/dist/leaflet.css";

function App() {
  const [center, setCenter] = useState({
    lat: 33.65556446705113,
    lng: 73.01579015824362,
  });
  const ZOOM_LEVEL = 30;
  const mapRef = useRef();
  return (
    <div>
      <nav class="navbar background">
        <ul class="nav-list">
          <div class="logo">
            <img src={logo} alt="Logo" />
          </div>
          <li>
            <a href="#menu">
              <MenuIcon />
            </a>
          </li>
        </ul>

        <div class="rightNav">
          <button class="btn btn-sm">
            <AccountCircleIcon fontSize="large" />
          </button>
        </div>
      </nav>

      <section class="section">
        <div class="box-main">
          <MapContainer center={center} zoom={ZOOM_LEVEL} ref={mapRef}>
            <TileLayer
              url={osm.maptiler.url}
              attribution={osm.maptiler.attribution}
            />
          </MapContainer>
        </div>
      </section>
      <footer className="footer">
        <p className="text-footer">Copyright ©-All rights are reserved</p>
      </footer>
    </div>
  );
}

export default App;
