import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getOmra } from "../actions/actions";
import Breadcrumb from "../components/common/Breadcrumb";
import Layout from "../components/layout/Layout";
import packageData from "../data/tourCard.json";

function TourPackage() {
  const [omra, setOmra] = useState([]);
  useEffect(() => {
    getOmra().then((res) => setOmra(res.data.data));
  }, []);

  return (
    <Layout>
      <Breadcrumb
        pageDetails="Omra Tunsie"
        pageTitle="Omra "
        IMG="/assets/images/bg/omra.jpg"
      />
      <div className="blog-grid-section pt-120 pb-120">
        <div className="container">
          <div className="row g-4">
            {omra.map((data) => {
              const { id, img, price, title, duration } = data;
              return (
                <div key={id} className="col-lg-4 col-md-6 col-sm-12">
                  <div className="best-plan-single1">
                    <div className="image">
                      <img src={img} className="img-fluid" alt="image" />
                    </div>
                    <div className="content">
                      <p>à partir de {price} TND</p>
                      <h4>
                        <Link href="/tour-package-details">
                          <a>{title}</a>
                        </Link>
                      </h4>
                      <div className="best-plan-meta">
                        <span className="duration">
                          <i className="bi bi-clock" />
                          {duration} jours
                        </span>
                        {/* <span className="rating">
                          <i className="bi bi-star-fill" />
                          {rating} ({review})
                        </span> */}
                      </div>
                      <div className="list-area">
                        <h5>Facilité de forfait gratuit :</h5>
                        <ul className="plan-list1">
                          <li>Facilité sur 6 fois</li>
                          <li>Meilleur tarif sur le marché !</li>
                        </ul>
                      </div>
                      <Link
                        href={{
                          pathname: "/tour-package-details",
                          query: { id: id },
                        }}
                      >
                        <a className="eg-btn btn--primary-outline btn--md">
                          VOIR L&apos;OFFRE
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
                      <i className="bi bi-arrow-left" /> Précédent
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
                      Suivant <i className="bi bi-arrow-right" />
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

export default TourPackage;
