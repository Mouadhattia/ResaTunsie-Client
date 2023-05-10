import React, { useState } from "react";

const Modal = ({ isOpen, setIsOpen }) => {
  const [rooms, setRooms] = useState([
    {
      id: 1,
      name: "Chambre 1",
      adulte: 1,
      kids: 0,
    },
  ]);

  const handleClose = () => {
    setIsOpen(false);
  };
  const handleAddRoom = () => {
    let id = Math.floor(Math.random() * 100000000);
    setRooms([
      ...rooms,
      { id: id, name: `Chambre${rooms.length + 1}`, adulte: 0, kids: 0 },
    ]);
  };
  const handleDeleteRoom = (id) => {
    setRooms(rooms.filter((e) => e.id != id));
  };

  return (
    <div
      style={{
        position: "fixed",
        top: isOpen ? "50%" : "-20000vh",
        left: "50%",
        width: "100%",
        height: "100%",
        maxHeight: "100%",
        transform: "translate(-50%, -50%)",
        backgroundColor: "transparent",
        zIndex: 999999,
        transition: "all 0.5s ease-in-out",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        overflowY: "auto",

        behavior: "smooth",
      }}
    >
      <div
        style={{
          position: "relative",
          backgroundColor: "white",
          padding: "2rem",
          borderRadius: "0.5rem",
          width: "100%",
          maxWidth: "500px",
          fontFamily: "unset",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "1rem",
          }}
        >
          <h4 style={{ fontFamily: "unset" }}>
            Sélection des chambres et des passagers
          </h4>
          <img
            alt="img"
            style={{
              width: "30px",
            }}
            onClick={handleClose}
            src="/assets/images/icons/close.png"
          />
        </div>

        <hr />
        <div style={{ width: "100%" }}>
          {rooms.map((room) => (
            <div key={room.id}>
              <h4 style={{ marginTop: "3rem", color: "#0047aa" }}>
                {room.name}
              </h4>
              <div
                style={{
                  display: "flex",
                  position: "relative",
                  color: "black",
                  width: "100%",
                }}
              >
                <div style={{ width: "100px" }}>
                  <label>Adulte(s)</label>
                  <input
                    defaultValue={room.adulte}
                    style={{ border: "1px gray solid", borderRadius: "4px" }}
                  />
                </div>
                <div style={{ width: "100px", marginLeft: "2rem" }}>
                  <label>Enfant(s)</label>
                  <input
                    defaultValue={room.kids}
                    style={{ border: "1px gray solid", borderRadius: "4px" }}
                  />
                  <label>(2-11 ans)</label>
                  {room.id !== rooms[0].id && (
                    <img
                      alt="img"
                      style={{
                        cursor: "pointer",
                        position: "absolute",
                        right: "6px",
                        top: "35px",
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
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <button style={{ color: "#0047aa" }} onClick={handleAddRoom}>
            <img
              alt="img"
              src="/assets/images/icons/add1.png"
              style={{ width: "16px" }}
            />{" "}
            Ajouter une chambre
          </button>
          <button
            style={{
              backgroundColor: "#ffdf22",
              padding: "0.7rem",
              borderRadius: "5px",
              color: "white",
              fontSize: "14px",
            }}
            onClick={handleClose}
          >
            VALIDER
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
