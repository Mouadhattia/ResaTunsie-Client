import Link from "next/link";
import React, { useEffect, useState } from "react";
import SwiperCore, { Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import { getTravel } from "../../actions/actions";

SwiperCore.use([Autoplay]);
function Home2Offer() {
  const [travels, setTravels] = useState([]);
  useEffect(() => {
    getTravel().then((res) =>
      setTravels(res.data.data.filter((e) => e.showInSlide === true))
    );
  }, []);
  const offerSlider = {
    slidesPerView: "auto",
    speed: 1200,
    spaceBetween: 25,
    autoplay: true,
    loop: true,
    roundLengths: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: "true",
    },
    navigation: false,
    breakpoints: {
      280: {
        slidesPerView: "auto",
        navigation: false,
      },
      576: {
        slidesPerView: "auto",
        navigation: false,
      },
      768: {
        slidesPerView: 2,
        navigation: false,
      },
      992: {
        slidesPerView: 3,
      },
      1200: {
        slidesPerView: 3,
      },
    },
  };
  return (
    <div className="offer-section">
      <div className="container">
        <div className="row">
          <div className="col-12 ">
            <Swiper {...offerSlider} className="swiper offer-slider">
              <div className="swiper-wrapper">
                {travels.map((travel) => (
                  <SwiperSlide className="swiper-slide" key={travel?.id}>
                    <div className="offer-single">
                      <img
                        src={travel?.img}
                        className="offer-bg"
                        alt="image"
                        style={{ width: "100%" }}
                      />
                      <span
                        style={{
                          color: "black",
                          left: "20px",
                          position: "absolute",
                          top: "20px",
                          borderRadius: "50%",
                          backgroundColor: "white",
                          width: "60px",
                          justifyContent: "center",
                          height: "60px",

                          display: "flex",
                          alignItems: "center",
                          fontFamily: "cursive",
                          fontWeight: "bold",
                        }}
                      >
                        -{travel?.promo}%
                      </span>
                      <div className="content">
                        <div className="review-area sibling-2">
                          <ul className="star-list">
                            {Array.from(
                              { length: travel?.rate },
                              (_, index) => (
                                <li key={index}>
                                  <i className="bi bi-star-fill" />
                                </li>
                              )
                            )}
                          </ul>
                          <span>10 Review</span>
                        </div>
                        <Link href="/">
                          <a>{travel?.title}</a>
                        </Link>
                        <span>
                          {" "}
                          {travel?.duration + 1} Jours / {travel?.duration}{" "}
                          Nuits Départ Garantie tous les jours a partir de{" "}
                          {travel?.price -
                            (travel?.promo / 100) * travel?.price}{" "}
                          TND
                        </span>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
            {/* <div className="swiper-pagination sibling-2 d-flex align-items-center justify-content-center mt-60" /> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home2Offer;
