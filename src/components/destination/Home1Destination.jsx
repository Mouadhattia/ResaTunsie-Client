import Link from "next/link";
import React, { useEffect, useState } from "react";
import { getTravel } from "../../actions/actions";
import destionData from "../../data/destination.json";

function Home1Destination() {
  const [travel, setTravel] = useState([]);
  useEffect(() => {
    getTravel().then((res) => setTravel(res.data.data));
  }, []);
  return (
    <div className="destination-section">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-xl-6  col-lg-8 col-md-10 text-center">
            <div className="section-title1">
              <span>Destination</span>
              <h2>Nos voyages organisés</h2>
              <img
                src="/assets/images/icons/section-title-vector.png"
                alt="image"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="container-fluid">
        <div className="destination-wrap">
          {travel.slice(0, 5).map((data) => {
            const { id, img, title } = data;
            return (
              <div key={id} className="destination-single1">
                <img
                  src={img}
                  className="destination-img img-fluid"
                  alt="image"
                  style={{ height: "50vh", maxWidth: "300px" }}
                />
                <div className="content">
                  <div className="text-wrap">
                    <h4>
                      <Link
                        href={{
                          pathname: "/tour-package-details2",
                          query: {
                            id: id,
                          },
                        }}
                      >
                        <a>{title}</a>
                      </Link>
                    </h4>
                    <p>Endroits extraordinaires</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-center mt-70">
          <div className="col-8 text-center">
            <Link href="/tour-package2">
              <a className="eg-btn btn--primary-outline btn--lg">Voir tout</a>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1Destination;
