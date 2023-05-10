import React, { useState } from "react";
import Swal from "sweetalert2";
import "react-datepicker/dist/react-datepicker.css";
import { createOmra } from "../../actions/actions";

function BookingForm({ id }) {
  const [omra, setOmra] = useState({
    fullName: "",
    email: "",
    phone: "",
    rooms: [
      {
        id: 1,
        name: "Chambre 1",
        adulte: 1,
        kids: 0,
      },
    ],
    message: "",
  });

  const handleAdulteChange = (id, value) => {
    let newRooms = omra.rooms.map((room) =>
      room.id === id ? { ...room, adulte: value } : room
    );
    setOmra({ ...omra, rooms: newRooms });
  };

  const handleKidsChange = (id, value) => {
    let newRooms = omra.rooms.map((room) =>
      room.id === id ? { ...room, kids: value } : room
    );
    setOmra({ ...omra, rooms: newRooms });
  };

  const handleCreateOmra = (e) => {
    e.preventDefault();

    if (
      omra.fullName !== "" &&
      omra.email !== "" &&
      omra.phone !== "" &&
      omra.message !== ""
    ) {
      createOmra({ ...omra, omraId: Number(id) }).then(() => {
        Swal.fire("ResaTunsie!", "votre demande a bien été envoyée", "success");
        setOmra({
          fullName: "",
          email: "",
          phone: "",
          rooms: [
            {
              id: 1,
              name: "Chambre 1",
              adulte: 1,
              kids: 0,
            },
          ],
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
  const handleAddRoom = (e) => {
    e.preventDefault();
    let id = Math.floor(Math.random() * 100000000);
    let newRoom = {
      id: id,
      name: `Chambre${omra.rooms.length + 1}`,
      adulte: 0,
      kids: 0,
    };
    setOmra({ ...omra, rooms: [...omra.rooms, newRoom] });
  };
  const handleDeleteRoom = (id) => {
    let newRooms = omra.rooms.filter((e) => e.id !== id);
    setOmra({ ...omra, rooms: newRooms });
  };
  return (
    <div className="booking-form-box">
      <h3>Réservez</h3>
      <p>
        Organisez votre voyage à l&apos;avance - réservez cette visite maintenant!
      </p>
      <form className="banner-form">
        <div className="search-box-single destination-box">
          <div className="searchbox-icon">
            <i className="bi bi-pencil-fill" />
          </div>
          <div className="searchbox-input">
            <input
              type="text"
              placeholder="Nom et prénom*"
              onChange={(e) => setOmra({ ...omra, fullName: e.target.value })}
            />
          </div>
        </div>
        <div className="search-box-single destination-box">
          <div className="searchbox-icon">
            <i className="bi bi-envelope-fill" />
          </div>
          <div className="searchbox-input">
            <input
              type="text"
              placeholder="E-mail*"
              onChange={(e) => setOmra({ ...omra, email: e.target.value })}
            />
          </div>
        </div>
        <div className="search-box-single destination-box">
          <div className="searchbox-icon">
            <i className="bi bi-telephone" />
          </div>
          <div className="searchbox-input">
            <input
              type="text"
              placeholder="Numéro de téléphone*"
              onChange={(e) => setOmra({ ...omra, phone: e.target.value })}
            />
          </div>
        </div>

        <div className="search-box-single destination-box">
          <div className="searchbox-icon">
            <i className="bi bi-telephone" />
          </div>

          <select
            className="form-select form-select-lg "
            aria-label=".form-select-lg example"
            style={{
              border: "none",
              outline: "none",
              height: "100%",
              width: "100%",
              padding: "1rem",
              position: "absolute",
              left: 0,
              fontSize: "15px",
            }}
          >
            <option selected>Chambre</option>
            <option value="1">Double</option>
            <option value="2">Triple</option>
            <option value="2">Quadruple</option>
          </select>
        </div>
        <button
          style={{ backgroundColor: "transparent" }}
          onClick={(e) => handleAddRoom(e)}
        >
          <img src="/assets/images/icons/add1.png"  alt="img" style={{ width: "16px" }} />{" "}
          Ajouter une chambre
        </button>
        <div style={{ width: "100%" }}>
          {omra.rooms.map((room) => (
            <div key={room.id}>
              <h4
                style={{
                  marginTop: "3rem",
                  color: "black",
                  fontFamily: "unset",
                }}
              >
                {room.name}
              </h4>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  color: "black",
                  width: "90%",
                  justifyContent: "space-between",
                }}
              >
                <div style={{ width: "30%" }}>
                  <label>Adulte(s)</label>
                  <input
                    defaultValue={room.adulte}
                    style={{
                      border: "1px gray solid",
                      borderRadius: "4px",
                      width: "100%",
                      padding: " 8%",
                    }}
                    onChange={(e) =>
                      handleAdulteChange(room.id, e.target.value)
                    }
                  />
                </div>
                <div style={{ width: "30%" }}>
                  <label>Enfant(s)</label>
                  <input
                    defaultValue={room.kids}
                    style={{
                      border: "1px gray solid",
                      borderRadius: "4px",
                      width: "100%",
                      padding: " 8%",
                    }}
                    onChange={(e) => handleKidsChange(room.id, e.target.value)}
                  />
                  <label>(2-11 ans)</label>
                  {room.id !== omra.rooms[0].id && (
                    <img
                    alt="img"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "-20px",
                        top: "42px",
                        width: "18px",
                      }}
                      onClick={() => handleDeleteRoom(room.id)}
                      src="/assets/images/icons/delete1.png"
                    />
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* <div className="search-box-single">
          <div className="searchbox-icon">
            <i className="bi bi-person-fill" />
          </div>
          <div className="searchbox-input">
            <input type="number" placeholder="People *" />
          </div>
        </div>
        <div className="search-box-single">
          <div className="searchbox-icon">
            <i className="bi bi-tags-fill" />
          </div>
          <div className="searchbox-input">
            <input type="number" placeholder="Number of tickets *" />
          </div>
        </div> */}
        <div className="search-box-single">
          <div className="searchbox-icon">
            <i className="bi bi-chat-left-text-fill" />
          </div>
          <div className="searchbox-input">
            <textarea
              name="message3"
              rows={6}
              placeholder="Votre demande*"
              defaultValue={""}
              onChange={(e) => setOmra({ ...omra, message: e.target.value })}
            />
          </div>
        </div>
        <button
          className="eg-btn btn--primary btn--lg w-100 mt-3"
          onClick={(e) => handleCreateOmra(e)}
        >
          Réservez
        </button>
      </form>
    </div>
  );
}

export default BookingForm;
