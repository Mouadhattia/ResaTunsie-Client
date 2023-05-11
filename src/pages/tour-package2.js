import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTravel } from "../actions/actions";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
function TourTackage2() {
  const [omra, setOmra] = useState([]);
  useEffect(() => {
    getTravel().then((res) => setOmra(res.data.data));
  }, []);
  return (
    <Layout>
      <Breadcrumb
        pageDetails="Obtenez les meilleurs forfaits pour vous"
        pageTitle="Choisissez votre tous"
        IMG="/assets/images/bg/travel.jpg"
      />
      <div className="tour-package-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {omra.map((data) => {
              const { id, img, price, title, promo } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="deal-single1">
                    <div className="deal-image">
                      <span className="favourite">
                        <i className="bi bi-suit-heart-fill" />
                      </span>
                      <span className="discount-bagde">{promo}%</span>
                      <img
                        src={img}
                        className="img-fluid"
                        alt="image"
                        style={{ height: "40vh", width: "100%" }}
                      />
                    </div>
                    <div className="deal-content">
                      <div className="review-area">
                        <ul className="star-list">
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-fill" />
                          </li>
                          <li>
                            <i className="bi bi-star-half" />
                          </li>
                        </ul>
                        <span>({"1"} Note)</span>
                      </div>
                      <h4>
                        <Link href="/tour-package-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="price">
                        <span>
                          à partir de {price - (promo / 100) * price} TND
                        </span>
                        <del>/{price} TND</del>
                      </div>
                      <Link
                        href={{
                          pathname: "/tour-package-details2",
                          query: {
                            id: id,
                          },
                        }}
                      >
                        <a className="eg-btn btn--primary-outline btn--md">
                          VOIR L&apos;OFFER
                        </a>
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="row justify-content-center">
            <div className="col-md-8">
              <nav className="pagination-wrap pt-50">
                <ul className="pagination d-flex justify-content-center gap-md-3 gap-2">
                  <li className="page-item">
                    <a className="page-link" href="#" tabIndex={-1}>
                      <i className="bi bi-arrow-left" /> PREV
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      01
                    </a>
                  </li>
                  <li className="page-item active" aria-current="page">
                    <a className="page-link" href="#">
                      02
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      03
                    </a>
                  </li>
                  <li className="page-item">
                    <a className="page-link" href="#">
                      NEXT <i className="bi bi-arrow-right" />
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default TourTackage2;
