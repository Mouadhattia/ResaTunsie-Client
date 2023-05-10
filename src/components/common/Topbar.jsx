import Link from "next/link";
import React from "react";
import Image from "next/image";

function Topbar() {
  return (
    <div className="topbar d-xl-flex d-none">
      <div className="container-lg container-fluid d-flex justify-content-between align-items-center">
        <div className="topbar-left">
          <ul className="topbar-info-list">
            <li>
              <i className="bi bi-clock" />
              Heures d&apos;ouverture: 8h00 - 18h00
            </li>
            <li>
              <i className="bi bi-geo-alt" />
              59 rue mohamed ali , Gabès, Tunisia
            </li>
          </ul>
        </div>
        {/* <div className="topbar-right">
          <ul className="topbar-right-list">
            <li>
         
              Inscription/Connexion
              <ul className="topbar-sublist">
                <li>
                  <Link href="/">
                    <a>Connexion</a>
                  </Link>
                </li>
                <li>
                  <Link href="/">
                    <a>Inscription</a>
                  </Link>
                </li>
              </ul>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
}

export default Topbar;
