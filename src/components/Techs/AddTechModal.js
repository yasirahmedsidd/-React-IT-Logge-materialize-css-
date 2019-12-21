import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
const AddTechModal = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const onSubmit = () => {
    // console.log(message, tech, attention);
    if (firstName === "" || lastName === "") {
      M.toast({
        html: " Please Enter the first name and last name",
        inDuration: 250,
        outDuration: 250,
        classes: "rounded red"
      });
    } else {
      console.log(firstName, lastName);
      //   clear fields
      setFirstName("");
      setLastName("");
    }
  };

  return (
    <div id="add-tech-modal" className="modal" style={{ width: "50%" }}>
      <div className="modal-content">
        <h4>New Technician</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="firstName"
              value={firstName}
              onChange={e => setFirstName(e.target.value)}
            />
            <label htmlFor="firstName" className="active">
              First Name
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="lastName"
              value={lastName}
              onChange={e => setLastName(e.target.value)}
            />
            <label htmlFor="lastName" className="active">
              Last Name
            </label>
          </div>
        </div>
      </div>

      <div className="modal-footer">
        <a
          href="#!"
          onClick={onSubmit}
          className="modal-close waves-effect waves-blue blue btn"
        >
          Enter
        </a>
      </div>
    </div>
  );
};

export default AddTechModal;
