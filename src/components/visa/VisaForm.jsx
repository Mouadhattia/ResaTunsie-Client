import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import { createVisa } from "../../actions/actions";
function VisaForm() {
  /////
  const [selectedFiles, setSelectedFiles] = useState([]);

  const handleFileChange = (event) => {
    setSelectedFiles([...selectedFiles, ...event.target.files]);
  };

  const handleSubmit = (e) => {
    const files = selectedFiles.map((file) => "batata/" + file.name);
    setVisa({ ...visa, files: files });
    e.preventDefault();

    for (let i = 0; i < selectedFiles.length; i++) {
      const formData = new FormData();
      formData.append("file", selectedFiles[i]);

      axios
        .post("https://resatunisie.tn/resatunisie-api/uploadFiles", formData)
        .then((res) => {
          selectedFiles([]);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  };

  /////
  const handleChange = (event) => {
    setVisa({ ...visa, typeOfVisa: event.target.value });
  };
  const handleChangeCabine = (event) => {
    setVisa({ ...visa, gender: event.target.value });
  };
  const handleChangeDemande = (event) => {
    setVisa({ ...visa, type: event.target.value });
  };
  const [visa, setVisa] = useState({
    typeOfVisa: "Personne",
    gender: "Male",
    files: [],
    firstName: "",
    Name: "",
    adultsNumbers: 0,
    KidsNumbers: 0,
    phone: "",
    type: "",
  });

  const handleCreateVisa = (e) => {
    e.preventDefault();

    if (
      visa.typeOfVisa !== "" &&
      visa.gender !== "" &&
      visa.firstName !== "" &&
      visa.Name !== "" &&
      visa.phone !== "" &&
      visa.type !== ""
    ) {
      createVisa(visa).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setVisa({
          typeOfVisa: "Personne",
          gender: "Male",
          files: [],
          firstName: "",
          Name: "",
          adultsNumbers: 0,
          KidsNumbers: 0,
          email: "",
          phone: "",
          type: "",
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
              <span>FORMULAIRE DE VISA</span>
              {selectedFiles.map((e, index) => (
                <h1 key={index}>{e.name}</h1>
              ))}
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
                        placeholder="Prénom:"
                        onChange={(e) =>
                          setVisa({
                            ...visa,
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
                          setVisa({
                            ...visa,
                            Name: e.target.value,
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
                      <span style={{ marginRight: "3%" }}>Personne</span>
                      <input
                        type="radio"
                        value="Personne"
                        checked={visa.typeOfVisa === "Personne"}
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
                      <span style={{ marginRight: "3%" }}>Famille</span>
                      <input
                        type="radio"
                        value="Famille"
                        checked={visa.typeOfVisa === "Famille"}
                        onChange={handleChange}
                      />
                    </div>
                  </div>
                  {visa.typeOfVisa === "Famille" && (
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <input
                          type="number"
                          placeholder=" Nombres d'Adultes:"
                          onChange={(e) =>
                            setVisa({
                              ...visa,
                              adultsNumbers: Number(e.target.value),
                            })
                          }
                        />
                      </div>
                    </div>
                  )}

                  {visa.typeOfVisa === "Famille" && (
                    <div className="col-lg-6">
                      <div className="form-inner">
                        <input
                          type="number"
                          placeholder="Nombres d'Enfants:"
                          onChange={(e) =>
                            setVisa({
                              ...visa,
                              KidsNumbers: Number(e.target.value),
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
                        placeholder="Tél:"
                        onChange={(e) =>
                          setVisa({
                            ...visa,
                            phone: e.target.value,
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
                      <span style={{ marginRight: "3%" }}>Male</span>
                      <input
                        value="Male"
                        checked={visa.gender === "Male"}
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
                      <span style={{ marginRight: "3%" }}>Famme</span>
                      <input
                        value="Famme"
                        checked={visa.gender === "Famme"}
                        type="radio"
                        onChange={handleChangeCabine}
                      />
                    </div>
                  </div>
                  <div className="col-lg-6">
                    <select
                      className="form-select form-select-lg mb-4 mt-4 "
                      style={{ border: "none", fontSize: "15px" }}
                      aria-label="Default select example"
                      onChange={(e) => handleChangeDemande(e)}
                    >
                      <option selected>Le fichier demandé</option>
                      <option value="Etudiant son père salarié">
                        Etudiant son père salarié
                      </option>
                      <option value="Salarié">Salarié</option>
                      <option value="Etudiant son père retraité">
                        Etudiant son père retraité
                      </option>
                      <option value="Retraité">Retraité</option>
                      <option value="Commercants">Commercants</option>
                      <option value="Etudiant son père commercant">
                        Etudiant son père commercant
                      </option>
                      <option value="فلاح">فلاح </option>
                    </select>
                  </div>
                  <div className="col-lg-12">
                    {visa.type === "Etudiant son père salarié" ? (
                      <ul>
                        <li>
                          {" "}
                          Attestation de présence{" "}
                          <input type="file" style={{ display: "none" }} />
                        </li>

                        <li>2 photo -copie passport</li>

                        <li>extrait naissance</li>
                        <li> change 1000 euro</li>
                        <li>engagement de retour Le père</li>
                        <li>Relevé bancaire des trois derniers mois</li>
                        <li>Attestation de travail</li>
                        <li>Les 3 derniers fiches de payes</li>
                      </ul>
                    ) : visa.type === "Salarié" ? (
                      <ul>
                        <li>2photos</li>
                        <li>Passeport</li>
                        <li>Relevé bancaire des trois derniers mois</li>
                        <li>change 1000 euro</li>
                        <li>Attestation de travail</li>
                        <li>Les 3 derniers fiches de payes</li>
                        <li> Titre de congé</li>
                        <li>Historique CNSS/CNRPS</li>
                      </ul>
                    ) : visa.type === "Etudiant son père retraité" ? (
                      <ul>
                        <li>Attestation de présence</li>
                        <li>2 photo </li>
                        <li>copie passport</li>
                        <li>extrait naissance</li>
                        <li>change 1000 euro</li>
                        <li>engagement de retour; Le père Cnss ou Cnrps </li>
                        <li> extrait bancaire de 3 derniers mois</li>
                        <li>prise en charge</li>
                      </ul>
                    ) : visa.type === "Retraité" ? (
                      <ul>
                        <li>2 photo</li>
                        <li>copie passport</li>
                        <li>change 1000 euro</li>
                        <li>engagement de retour; Cnss ou Cnrps</li>
                        <li>extrait bancaire de 3 derniers mois </li>
                      </ul>
                    ) : visa.type === "Commercants" ? (
                      <ul>
                        <li>2 photo</li>
                        <li>copie passport</li>
                        <li>Relevé bancaire des trois derniers mois</li>
                        <li>change 1000 euro</li>
                        <li>Registre de commerce</li>
                        <li>Patante </li>
                        <li>Reçu de payement d&apos;impôt</li>
                      </ul>
                    ) : visa.type === "Etudiant son père commercant" ? (
                      <ul>
                        <li>Attestation de présence</li>
                        <li>2 photo</li>
                        <li>copie passport</li>
                        <li>extrait naissance</li>
                        <li>change 1000 euro</li>
                        <li>
                          engagement de retour Le père - Registre de commerce
                        </li>
                        <li>Patante </li>
                        <li>Reçu de payement d&apos;impôt</li>
                        <li>prise en charge</li>
                      </ul>
                    ) : visa.type === "فلاح" ? (
                      <ul>
                        <li>صورتين </li>
                        <li>نسخة جواز سفر </li>
                        <li>تبديل 1000 يورو </li>
                        <li>شهادة فلاح </li>
                        <li>الدخل السنوي</li>
                        <li>كشف حساب 3 أشهر</li>
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                  <div className="col-lg-12">
                    <div>
                      <label
                        htmlFor="file-upload"
                        className="file-upload-label"
                      >
                        {selectedFiles.length > 0 ? (
                          <div>
                            <img
                              src="https://icons-for-free.com/iconfiles/png/512/cloud+upload+file+storage+upload+icon-1320190558968694328.png"
                              alt="Upload Icon"
                              width={30}
                            />
                            <span>{selectedFiles.length} files selected</span>
                          </div>
                        ) : (
                          <div>
                            <img
                              src="https://icons-for-free.com/iconfiles/png/512/cloud+upload+file+storage+upload+icon-1320190558968694328.png"
                              alt="Upload Icon"
                              width={30}
                            />
                            <span>{selectedFiles.length} files selected</span>
                          </div>
                        )}
                      </label>
                      <input
                        id="file-upload"
                        type="file"
                        onChange={handleFileChange}
                        style={{ display: "none" }}
                        multiple
                      />
                      <button onClick={(e) => handleSubmit(e)}>Upload</button>
                    </div>
                  </div>

                  <div className="col-lg-12">
                    <button
                      type="submit"
                      className="eg-btn btn--primary btn--lg submit-btn"
                      onClick={(e) => handleCreateVisa(e)}
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

export default VisaForm;
