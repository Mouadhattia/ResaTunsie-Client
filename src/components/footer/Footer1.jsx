import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import Image from "next/image";

function Footer1() {
  const router = useRouter();
  const currentRoute = router.pathname;
  const sibling =
    currentRoute === "/index-city-tour" || currentRoute === "/index-city-tour"
      ? "footer-section sibling-2"
      : currentRoute === "/index-travel2"
      ? "footer-section sibling-2"
      : currentRoute == "/index-wildlife"
      ? "footer-section sibling-3"
      : "footer-section";
  return (
    <footer className={sibling}>
      <div className="footer-top">
        <div className="container-xl container-lg-fluid container">
          <div className="row justify-content-center gy-5">
            <div className="col-lg-3 col-md-10 col-sm-6 col-11 order-sm-0 order-1">
              <div className="footer-about">
                <img
                  src="/assets/images/icons/footer-plane.svg"
                  className="footer-plane"
                  alt="image"
                />
                <div className="footer1-logo">
                  <img
                    src="/assets/images/icons/logocb.png"
                    alt="image"
                    width={150}
                  />
                  <p style={{color:"#ffdf22"}}>Depuis :2017</p>
                </div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  version="1.1"
                  viewBox="0 0 400 400"
                >
                  <defs>
                    {/* The text path: see links above regarding coordinate system */}
                    <path
                      d="M0, 200a200, 200 0 1, 0 400, 0a200, 200 0 1, 0 -400, 0"
                      id="txt-path"
                      fill="white"
                    />
                  </defs>
                  <text
                    fill="#DDDDDD"
                    fontSize="35.5"
                    fontFamily="Helvetica Neue"
                    fontWeight={600}
                  >
                    {/* This is the magic */}
                    <textPath startOffset={0} xlinkHref="#txt-path">
                      Resa Tunise Agence de voyage &nbsp; Resa Tunise Travel
                      Agency
                    </textPath>
                  </text>
                </svg>
              </div>
            </div>
            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item">
                <h4>Menu</h4>
                <ul className="link-list">
                  <li>
                    <Link href="/">
                      <a>Hotel tunisie</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package2">
                      <a>Voyage organisés</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/bateau">
                      <a>Bateau</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/tour-package">
                      <a>Omra</a>
                    </Link>
                  </li>
                  <li>
                    <Link href="/contact">
                      <a>Contact </a>
                    </Link>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 col-sm-6 d-flex justify-content-lg-center">
              <div className="footer-item">
                <h4>Notre Contact</h4>
                <ul className="contact-list" >
                  <li>
                    <div className="icon"  >
                      <i className="bi bi-telephone"  />
                    </div>
                    <div className="text">
                      {/* <a href="tel:+8801761111456">+216 31 </a> */}
                      <a href="tel:+8801761111457">+216 27801945</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-envelope" />
                    </div>
                    <div className="text">
                      {/* <a href="mailto:info@example.com">info@example.com</a> */}
                      <a href="contact@resa.tn">contact@resatunsie.tn</a>
                    </div>
                  </li>
                  <li>
                    <div className="icon">
                      <i className="bi bi-geo-alt" />
                    </div>
                    <div className="text">
                      59 rue mohamed ali , Gabès, Tunisia
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="footer-bottom">
          <div className="row d-flex align-items-center g-3">
            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center text-lg-start text-center px-1">
              <p>
                Agence de voyage{" "}
                <a href="#" className="egns-lab" style={{color:"#ffdf22"}}>
                  City Vol{" "}
                </a>{" "}
                {/* | Design By{" "} */}
                {/* <a
                  href="#"
                  className="egns-lab"
                >
                  Egens Lab
                </a> */}
              </p>
            </div>

            <div className="col-lg-6 d-flex justify-content-lg-start justify-content-center align-items-center mb-lg-0 mb-5">
              <h4 style={{ color: "white", margin: "1% 2% 0 0" }}>
                Rester connecté:
              </h4>
              <ul className="footer-social">
                <li>
                  <a href="https://www.facebook.com/Agence.City.Vol">
                    <i className="bx bxl-facebook" />
                  </a>
                </li>

                <li>
                  <a href="https://www.instagram.com/cityvolvoyages/">
                    <i className="bx bxl-instagram" />
                  </a>
                </li>
                <li>
                  <a href="https://www.pinterest.com/">
                    <i className="bx bxl-tiktok" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer1;
