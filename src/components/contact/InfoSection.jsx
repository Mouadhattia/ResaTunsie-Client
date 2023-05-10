import React from "react";

function InfoSection() {
  return (
    <div className="info-section pt-120 pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-lg-7 col-md-10 col-sm-12">
            <div className="info-title-area">
              <h3>Resa Tunise Agence de voyage.</h3>
              <p>
                Resa Tunise, votre Agence de Voyage en Tunisie en Ligne vous
                propose des Promotions sur vos Voyages et Séjours en Tunisie et
                dans le Monde avec les Meilleurs Prix et Services.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4 justify-content-center">
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bi bi-geo-alt" />
              </div>
              <div className="info-text">
                <h3>Addresse</h3>
                <p>59 rue mohamed ali </p>
                <p>Gabès</p>
                <p>Tunisia</p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>Service Réservation</h3>
                <a href="tel:+21675265530">+216 27801945</a>
                <a href="tel:+21675265530">+216 75265530</a>
                <a href="">reservationcityvol@gmail.com</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>Service Visa</h3>
                <a href="tel:+21625526522 ">+216 25526522 </a>
                <a href="tel:+21620005157 ">+216 20005157 </a>
                <a href="mailto:servicevisacityvol@gmail.com">
                  servicevisacityvol@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-envelope" />
              </div>
              <div className="info-text">
                <h3>Service après vente</h3>
                <a href="tel:+21628899336 ">+216 28899336 </a>
                <a href="mailto:serviceapresventecityvol@gmail.com">
                  serviceapresventecityvol@gmail.com
                </a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bx-phone-call" />
              </div>
              <div className="info-text">
                <h3>Directeur</h3>
                <a href="tel:+21695069770 ">+216 95069770 </a>
                <a href="mailto:wajdisaidi@cvv.tn">wajdisaidi@cvv.tn</a>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 col-sm-10">
            <div className="info-single">
              <div className="info-icon">
                <i className="bx bxs-comment-detail " />
              </div>
              <div className="info-text">
                <h3>Info Légale</h3>
                <a href="">MF: 1535093/B </a>
                <a href="">Agence catégorie A</a>
              </div>
            </div>
          </div>
        </div>
        <div className="mapouter" style={{ marginTop: "5%", width: "100%" }}>
          <div className="gmap_canvas" style={{ width: "100%" }}>
            <iframe
              width="100%"
              height="500"
              id="gmap_canvas"
              src="https://maps.google.com/maps?q=33.8849198512468,%2010.10404390976729&t=k&z=19&ie=UTF8&iwloc=&output=embed"
             
              scrolling="no"
             
            ></iframe>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoSection;
