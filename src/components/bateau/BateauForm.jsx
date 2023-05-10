import React, { useState } from "react";
import { createBateau } from "../../actions/actions";
import Swal from "sweetalert2";

function BateauForm() {
  const [value, setValue] = useState("aller");

  const handleChange = (event) => {
    setValue(event.target.value);
    if (event.target.value === "aller-retour") {
      setBateau({ ...bateau, roundTrip: true });
    }
  };
  const handleChangeCabine = (event) => {
    setBateau({ ...bateau, comfort: event.target.value });
  };

  const [bateau, setBateau] = useState({
    DepartureCity: "",
    cityOfArrival: "",
    roundTrip: false,
    dateToGo: "",
    returnDate: "",
    vehicle: "",
    height: 0,
    width: 0,
    comfort: "Fauteuil",
    adultsNumbers: 0,
    KidsNumbers: 0,
    BebeNumbers: 0,
    firstName: "",
    Name: "",
    email: "",
    phone: "",
  });

  const handleCreateBateau = (e) => {
    e.preventDefault();

    if (
      bateau.DepartureCity !== "" &&
      bateau.cityOfArrival !== "" &&
      bateau.vehicle !== "" &&
      bateau.comfort !== "" &&
      bateau.firstName !== "" &&
      bateau.Name !== "" &&
      bateau.email !== "" &&
      bateau.phone !== "" &&
      bateau.dateToGo !== ""
    ) {
      createBateau(bateau).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setBateau({
          DepartureCity: "",
          cityOfArrival: "",
          dateToGo: "",
          returnDate: "",
          roundTrip: false,
          vehicle: "",
          height: 0,
          width: 0,
          comfort: "Fauteuil",
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
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Ville de départ:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
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
                        placeholder="Ville d' arrivée:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                            setBateau({
                              ...bateau,
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
                        type="text"
                        placeholder="Véhicule:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
                            vehicle: e.target.value,
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Hauteur:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
                            height: Number(e.target.value),
                          })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Largeur:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
                            width: Number(e.target.value),
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
                      <span style={{ marginRight: "3%" }}>Fauteuil</span>
                      <input
                        value="Fauteuil"
                        checked={bateau.comfort === "Fauteuil"}
                        type="radio"
                        onChange={handleChangeCabine}
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
                      <span style={{ marginRight: "3%" }}>Cabine</span>
                      <input
                        value="Cabine"
                        checked={bateau.comfort === "Cabine"}
                        type="radio"
                        onChange={handleChangeCabine}
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input
                        type="number"
                        placeholder="Nombres d'Adultes:"
                        onChange={(e) =>
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                          setBateau({
                            ...bateau,
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
                      onClick={(e) => handleCreateBateau(e)}
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

export default BateauForm;
