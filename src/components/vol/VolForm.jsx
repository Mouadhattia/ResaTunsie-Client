import React, { useState } from "react";
import { createVol } from "../../actions/actions";
import Swal from "sweetalert2";
function VolForm() {
  const [value, setValue] = useState("aller");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "aller-retour") {
      setVol({ ...vol, roundTrip: true });
    }
  };

  const [vol, setVol] = useState({
    DepartureCity: "",
    cityOfArrival: "",
    roundTrip: false,
    dateToGo: "",
    returnDate: "",
    adultsNumbers: 0,
    KidsNumbers: 0,
    BebeNumbers: 0,
    firstName: "",
    Name: "",
    email: "",
    phone: "",
  });

  const handleCreateVol = (e) => {
    e.preventDefault();

    if (
      vol.DepartureCity !== "" &&
      vol.cityOfArrival !== "" &&
      vol.firstName !== "" &&
      vol.Name !== "" &&
      vol.email !== "" &&
      vol.phone !== "" &&
      vol.dateToGo !== ""
    ) {
      createVol(vol).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setVol({
          DepartureCity: "",
          cityOfArrival: "",
          roundTrip: false,
          dateToGo: "",
          returnDate: "",
          adultsNumbers: 0,
          KidsNumbers: 0,
          BebeNumbers: 0,
          firstName: "",
          Name: "",
          email: "",
          phone: "",
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
                src="assets/images/icons/section-title-vector.png"
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
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Ville / Aéroport départ:"
                        onChange={(e) =>
                          setVol({
                            ...vol,
                            DepartureCity: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Ville / Aéroport arrivée:"
                        onChange={(e) =>
                          setVol({
                            ...vol,
                            cityOfArrival: e.target.value,
                          })
                        }
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
                      <span style={{ marginRight: "3%" }}>Aller</span>
                      <input
                        type="radio"
                        value="aller"
                        checked={value === "aller"}
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
                      <span style={{ marginRight: "3%" }}>Aller - Retour</span>
                      <input
                        type="radio"
                        value="aller-retour"
                        checked={value === "aller-retour"}
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
                          setVol({
                            ...vol,
                            dateToGo: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  {value === "aller-retour" && (
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <input
                          type="date"
                          placeholder="Date Retour"
                          onChange={(e) =>
                            setVol({
                              ...vol,
                              returnDate: e.target.value,
                            })
                          }
                        />
                      </div>
                    </div>
                  )}

                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Nombres d'Adultes:"
                        onChange={(e) =>
                          setVol({
                            ...vol,
                            adultsNumbers: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Nombres d'Enfants:"
                        onChange={(e) =>
                          setVol({
                            ...vol,
                            KidsNumbers: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Nombres de Bébés:"
                        onChange={(e) =>
                          setVol({
                            ...vol,
                            BebeNumbers: Number(e.target.value),
                          })
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
                          setVol({
                            ...vol,
                            firstName: e.target.value,
                          })
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
                          setVol({
                            ...vol,
                            Name: e.target.value,
                          })
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
                          setVol({
                            ...vol,
                            email: e.target.value,
                          })
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
                          setVol({
                            ...vol,
                            phone: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                      onClick={(e) => handleCreateVol(e)}
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

export default VolForm;
