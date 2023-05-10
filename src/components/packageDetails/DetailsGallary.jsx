import React, { useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import Fullscreen from "yet-another-react-lightbox/plugins/fullscreen";
function DetailsGallary() {
  const [isOpenimg, setOpenimg] = useState({
    openingState: false,
    openingIndex: 0,
  });

  return (
    <div
      className="tab-pane fade"
      id="v-pills-gallery"
      role="tabpanel"
      aria-labelledby="v-pills-gallery-tab"
    >
      <div className="tour-gallery-wrap">
        <h3 className="tour-details-subtitle">Resa tunsie Gallery</h3>
        <div className="row g-4 justify-content-center">
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/02/pelerins-retour-tunisie.jpg?fit=680%2C400&ssl=1"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 0 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101826.jpg"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 1 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101837.jpg"
                className="img-fluid"
                alt="image"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 2 })
                }
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101848.jpg"
                className="img-fluid"
                alt="image"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 3 })
                }
              />
            </div>
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101858.jpg"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 4 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 5 })
                }
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113411.jpg"
                className="img-fluid"
                alt="image"
              />
            </div>
          </div>
          <div className="col-xxl-4 col-xl-4 col-lg-4 col-sm-4 col-6">
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113804.jpg"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 6 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113820.jpg"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 7 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            {/* <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery9.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 8 })
                }
                className="img-fluid"
                alt="image"
              />
            </div>
            <div className="tour-gallery">
              <img
                src="assets/images/gallery/tour-gallery10.png"
                style={{ cursor: "pointer" }}
                onClick={() =>
                  setOpenimg({ openingState: true, openingIndex: 5 })
                }
                className="img-fluid"
                alt="image"
              />
            </div> */}
          </div>
        </div>
        <Lightbox
          className="img-fluid"
          open={isOpenimg.openingState}
          plugins={[Fullscreen]}
          index={isOpenimg.openingIndex}
          close={() => setOpenimg(false)}
          styles={{
            container: {
              backgroundColor: "rgba(0, 0, 0, .9)",
              cursor: "pointer",
            },
          }}
          slides={[
            {
              src: "https://i0.wp.com/lapresse.tn/wp-content/uploads/2020/02/pelerins-retour-tunisie.jpg?fit=680%2C400&ssl=1",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101826.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101837.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101848.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-5350-20160415-101858.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113411.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113804.jpg",
            },
            {
              src: "https://fwk.resabo.com/cr.fwk/images/products/Product-8894-20221107-113820.jpg",
            },
            // { src: "assets/images/gallery/big-gallery-image9.png" },
            // { src: "assets/images/gallery/big-gallery-image10.png" },
            // { src: "assets/images/gallery/big-gallery-image11.png" },
            // { src: "assets/images/gallery/big-gallery-image12.png" },
            // { src: "assets/images/gallery/big-gallery-image13.png" },
            // { src: "assets/images/gallery/big-gallery-image14.png" },
          ]}
        />
      </div>
    </div>
  );
}

export default DetailsGallary;
