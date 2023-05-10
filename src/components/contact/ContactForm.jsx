import React, { useState } from "react";
import { createContact } from "../../actions/actions";
import Swal from "sweetalert2";

function ContactForm() {
  const [contact, setContact] = useState({
    FullName: "",
    address: "",
    company: "",
    function: "",
    civility: "",
    information: "",
    email: "",
    phone: "",
    fax: "",
    message: "",
  });

  const handleCreateContact = (e) => {
    e.preventDefault();

    if (
      contact.FullName !== "" &&
      contact.address !== "" &&
      contact.company !== "" &&
      contact.function !== "" &&
      contact.civility !== "" &&
      contact.information !== "" &&
      contact.email !== "" &&
      contact.phone !== "" &&
      contact.fax !== "" &&
      contact.message !== ""
    ) {
      createContact(contact).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setContact({
          FullName: "",
          address: "",
          company: "",
          function: "",
          civility: "",
          information: "",
          email: "",
          phone: "",
          fax: "",
          message: "",
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
    <div className="contact-section pb-120">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-6 text-center">
            <div className="section-title1">
              <span>FORMULAIRE DE RÉSERVATION</span>
              <h2>Prenons contact</h2>
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
                        placeholder="Nom Prénom:"
                        value={contact.FullName}
                        onChange={(e) =>
                          setContact({ ...contact, FullName: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        value={contact.phone}
                        type="text"
                        placeholder="Numéro de téléphone:"
                        onChange={(e) =>
                          setContact({ ...contact, phone: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        placeholder="Email:"
                        value={contact.email}
                        onChange={(e) =>
                          setContact({ ...contact, email: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        value={contact.fax}
                        placeholder="Fax:"
                        onChange={(e) =>
                          setContact({ ...contact, fax: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        value={contact.address}
                        type="text"
                        placeholder="Adresse:"
                        onChange={(e) =>
                          setContact({ ...contact, address: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <div className="form-inner">
                      <input
                        type="text"
                        value={contact.company}
                        placeholder="Société:"
                        onChange={(e) =>
                          setContact({ ...contact, company: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <div className="form-inner">
                      <input
                        type="text"
                        value={contact.function}
                        placeholder="Fonction:"
                        onChange={(e) =>
                          setContact({ ...contact, function: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <select
                      value={contact.civility}
                      className="form-select form-select-lg mb-4 mt-4 "
                      style={{ border: "none", fontSize: "15px" }}
                      aria-label="Default select example"
                      onChange={(e) =>
                        setContact({ ...contact, civility: e.target.value })
                      }
                    >
                      <option selected>Civilité</option>
                      <option value="Mr">Mr</option>
                      <option value="Mme">Mme</option>
                      <option value="Mlle">Mlle</option>
                    </select>
                  </div>
                  <div className="col-lg-6">
                    <select
                      value={contact.information}
                      className="form-select form-select-lg mb-4 mt-4 "
                      style={{ border: "none", fontSize: "15px" }}
                      aria-label="Default select example"
                      onChange={(e) =>
                        setContact({ ...contact, information: e.target.value })
                      }
                    >
                      <option selected>Motif de contact</option>
                      <option value="Réservation">Réservation</option>
                      <option value="Renseignement">Renseignement</option>
                    </select>
                  </div>

                  <div className="col-lg-12">
                    <div className="form-inner">
                      <textarea
                        value={contact.message}
                        name="message"
                        rows={5}
                        placeholder="Tapez votre message..."
                        defaultValue={""}
                        onChange={(e) =>
                          setContact({ ...contact, message: e.target.value })
                        }
                      />
                    </div>
                  </div>
                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                      onClick={(e) => handleCreateContact(e)}
                    >
                      Soumettre maintenant
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

export default ContactForm;
