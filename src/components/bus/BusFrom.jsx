import React, { useState } from "react";
import { createBus } from "../../actions/actions";
import Swal from "sweetalert2";

function BusForm() {
  const handleChange = (event) => {
    setBus({ ...bus, size: event.target.value });
  };

  const [bus, setBus] = useState({
    firstName: "",
    Name: "",
    size: "Mini",
    strat: "",
    reach: "",
    backFrom: "",
    reachTo: "",
    email: "",
    phone: "",
    desc: "",
    dateToGo: "",
    returnDate: "",
  });

  const handleCreateBus = (e) => {
    e.preventDefault();

    if (
      bus.firstName !== "" &&
      bus.Name !== "" &&
      bus.size !== "" &&
      bus.strat !== "" &&
      bus.reach !== "" &&
      bus.backFrom !== "" &&
      bus.email !== "" &&
      bus.phone !== "" &&
      bus.desc !== "" &&
      bus.reachTo !== "" &&
      bus.dateToGo !== "" &&
      bus.returnDate !== ""
    ) {
      createBus(bus).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setBus({
          firstName: "",
          Name: "",
          size: "Mini",
          strat: "",
          reach: "",
          backFrom: "",
          email: "",
          phone: "",
          desc: "",
          reachTo: "",
          dateToGo: "",
          returnDate: "",
        });
      });
    } else {
      Swal.fire(
        "ResaTunsie!",
        "S'il-vous-plaît complétez tous les champs requis",
        "error"
      );
    }
  };
  return (
    <div className="contact-section pb-120 " style={{ marginTop: "5%" }}>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="section-title1">
              {/* <span>Merci de nous renseigner à propos de</span> */}
              <h2>Merci de nous renseigner à propos de</h2>
              <img
                src="/assets/images/icons/section-title-vector.png"
                alt="image"
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="contact-from-wrapper">
              <form>
                <div className="row">
                  <div className="col-lg-12">
                    <div
                      style={{
                        marginTop: "5%",
                        width: "100%",
                        padding: "2% 0 2% 0",
                      }}
                    >
                      <span style={{ marginRight: "3%" }}>
                        {" "}
                        Grand bus   (50 places)
                      </span>
                      <input
                        type="radio"
                        value="Grand"
                        checked={bus.size === "Grand"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      style={{
                        marginTop: "5%",
                        width: "100%",
                        padding: "2% 0 2% 0",
                      }}
                    >
                      <span style={{ marginRight: "3%" }}>
                        Mini bus (28 places)
                      </span>
                      <input
                        type="radio"
                        value="Mini"
                        checked={bus.size === "Mini"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div
                      style={{
                        marginTop: "5%",
                        width: "100%",
                        padding: "2% 0 2% 0",
                      }}
                    >
                      <span style={{ marginRight: "3%" }}>
                        Micro bus (16 places)
                      </span>
                      <input
                        type="radio"
                        value="Micro"
                        checked={bus.size === "Micro"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="date"
                        placeholder="Date aller"
                        onChange={(e) =>
                          setBus({ ...bus, dateToGo: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="date"
                        placeholder="Date Retour"
                        onChange={(e) =>
                          setBus({ ...bus, returnDate: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Départ de :"
                        onChange={(e) =>
                          setBus({ ...bus, strat: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Arrivé à :"
                        onChange={(e) =>
                          setBus({ ...bus, reach: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Retour de  :"
                        onChange={(e) =>
                          setBus({ ...bus, backFrom: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Arrivé à :"
                        onChange={(e) =>
                          setBus({ ...bus, reachTo: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Ou bien taper votre circuit en détaille :"
                        onChange={(e) =>
                          setBus({ ...bus, desc: e.target.value })
                        }
                      />
                    </div>
                  </div>

                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Prénom:"
                        onChange={(e) =>
                          setBus({ ...bus, firstName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Nom:"
                        onChange={(e) =>
                          setBus({ ...bus, Name: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Email:"
                        onChange={(e) =>
                          setBus({ ...bus, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Tél:"
                        onChange={(e) =>
                          setBus({ ...bus, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                      onClick={(e) => handleCreateBus(e)}
                    >
                      Envoyer
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BusForm;
