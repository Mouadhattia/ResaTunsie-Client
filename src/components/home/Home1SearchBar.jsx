import { useRouter } from "next/router";
import React, { useState } from "react";
import Select from "react-select";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "../modal/Modal";

function Home1SearchBar({ buttonName = "rechercher" }) {
  const [isOpen, setIsOpen] = useState(false);

  const [desnation, setdesnation] = useState(null);
  const [date1, setDate1] = useState(new Date());
  const [date2, setDate2] = useState(new Date());
  const monthOptions = [
    { value: "January", label: "January" },
    { value: "February", label: "February" },
    { value: "March", label: "March" },
    { value: "April", label: "April" },
    { value: "May", label: "May" },
    { value: "June", label: "June" },
    { value: "July", label: "July" },
    { value: "August", label: "August" },
    { value: "September", label: "September" },
    { value: "October", label: "October" },
    { value: "November", label: "November" },
    { value: "December", label: "December" },
  ];
  const destinationOption = [
    { value: "tunis", label: "tunis, Tunisie" },
    { value: "sousse", label: "sousse, Tunisie" },
    { value: "gabes", label: "gabes, Tunisie" },
    { value: "djerba", label: "djerba, Tunisie" },
    { value: "sfax", label: "sfax, Tunisie" },
    { value: "nabel", label: "nabel, Tunisie" },
    { value: "mestir", label: "mestir, Tunisie" },
    { value: "hawariya", label: "hawariya, Tunisie" },
    { value: "ain drahem", label: "ain drahem, Tunisie" },
    { value: "gafsa", label: "gafsa, Tunisie" },
  ];
  const tourTypeOptions = [
    { value: "test chambre 1", label: "test chambre 1" },
    { value: "test chambre 2", label: "test chambre 2" },
    { value: "test chambre 3", label: "test chambre 3" },
    { value: "test chambre 4", label: "test chambre 4" },
    { value: "test chambre 5", label: "test chambre 5" },
  ];
  const customStyles = {
    menu: (provided, state) => ({
      ...provided,

      width: state.selectProps.width,
      borderBottom: "1px dotted pink",
      color: state.selectProps.menuColor,
      textAlign: "left",
      padding: 5,
      zIndex: 2,
    }),
    control: (provided) => ({
      ...provided,
      height: 16,
      width: "100%",
      maxWidth: "450px",
      marginTop: "-12px",
      border: "0px solid red",
      fontSize: 15,
      fontWeight: "500",
      backgroundColor: "#fff",
      outline: "none",
      boxShadow: "none",
    }),

    placeholder: (provided) => ({
      ...provided,
      color: "#1C171D",
    }),

    dropdownIndicator: (provided) => ({
      ...provided,
      color: "#09100d",
    }),
  };
  const router = useRouter();
  const currentRoute = router.pathname;
  return (
    <div
      className={
        currentRoute === "/index-adventure"
          ? "searchbar-section sibling-2"
          : "searchbar-section"
      }
    >
      <div className="container">
        <div className="multi-main-search" style={{ borderRadius: "16px" }}>
          <div className="row align-items-center g-4">
            <div className="col-lg-8">
              <div className="row gx-0 gy-4 align-items-center">
                <div className="col-lg-3 col-md-3" style={{ zIndex: 3 }}>
                  <div className="search-box-single destination-box">
                    <div className="searchbox-icon">
                      <img
                        src="/assets/images/icons/form-location.svg"
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="searchbox-input">
                      <Select
                        theme={(theme) => ({
                          ...theme,
                          borderRadius: 0,
                          padding: 0,
                          colors: {
                            ...theme.colors,
                            primary: "#90b956",
                          },
                        })}
                        styles={customStyles}
                        components={{
                          IndicatorSeparator: () => null,
                        }}
                        width="300px"
                        menuColor="#333"
                        defaultValue={desnation}
                        options={destinationOption}
                        placeholder="Destination"
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3 ">
                  <div className="search-box-single remove-after">
                    <div className="searchbox-input">
                      <DatePicker
                        placeholder="Votre Arrivée"
                        selected={date1}
                        onChange={(value) => setDate1(value)}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-lg-3 col-md-3">
                  <div className="search-box-single remove-after">
                    <div className="searchbox-input">
                      <DatePicker
                        placeholder="Votre Départ"
                        selected={date2}
                        onChange={(value) => setDate2(value)}
                      />
                    </div>
                  </div>
                </div>

                <div className="col-lg-3 col-md-3">
                  <div className="search-box-single remove-after">
                    <div className="searchbox-icon">
                      <img
                        src="/assets/images/icons/travelling.svg"
                        alt="image"
                        width={20}
                        height={20}
                      />
                    </div>
                    <div className="searchbox-input">
                      <h4
                        style={{
                          margin: "3px 0 0 5px",
                          fontFamily: "sans-serif",
                          cursor: "pointer",
                        }}
                        onClick={() => setIsOpen(true)}
                      >
                        {" "}
                        Chambres{" "}
                      </h4>
                      <Modal isOpen={isOpen} setIsOpen={setIsOpen} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-2 d-flex justify-content-end">
              <div className="main-form-submit w-100">
                <button
                  type="submit"
                  className="eg-btn btn--primary btn--lg w-100"
                >
                  {buttonName}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home1SearchBar;
