import React, { useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import PropTypes from "prop-types";

import { addLog } from "../../redux/actions/LogActions";
import { connect } from "react-redux";

const AddLogModal = props => {
  const { addLog } = props;
  const [message, setMessage] = useState("");
  const [attention, setAttention] = useState(false);
  const [tech, setTech] = useState("");

  const onSubmit = () => {
    // console.log(message, tech, attention);
    if (message === "" || tech === "") {
      M.toast({
        html: " Please Enter a message and select technician",
        inDuration: 250,
        outDuration: 250,
        classes: "rounded red "
      });
    } else {
      const newLog = {
        message,
        attention,
        tech,
        date: new Date()
      };
      addLog(newLog);
      M.toast({ html: `Log added by ${tech}` });
      //   clear fields
      setMessage("");
      setTech("");
      setAttention(false);
    }
  };

  return (
    <div id="add-log-modal" className="modal" style={modalStyle}>
      <div className="modal-content">
        <h4>Enter System Log</h4>
        <div className="row">
          <div className="input-field">
            <input
              type="text"
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
            />
            <label htmlFor="message" className="active">
              Log Message
            </label>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <select
              name="tech"
              value={tech}
              className="browser-default"
              onChange={e => setTech(e.target.value)}
            >
              {/* Will Dynamically Change by db */}
              <option value="" disabled>
                Select Technician
              </option>
              <option value="john Doe">john Doe</option>
              <option value="john Doe">john Doe</option>
              <option value="john Doe">john Doe</option>
            </select>
          </div>
        </div>
        <div className="row">
          <div className="input-field">
            <p>
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  checked={attention}
                  value={attention}
                  onChange={e => setAttention(!attention)}
                />
                <span>Needs Attention</span>
              </label>
            </p>
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
const modalStyle = {
  width: "75%",
  height: "75%"
};
AddLogModal.propTypes = {
  addLog: PropTypes.func.isRequired
};
export default connect(null, { addLog })(AddLogModal);
