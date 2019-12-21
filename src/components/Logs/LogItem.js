import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { deleteLog } from "../../redux/actions/LogActions";
import M from "materialize-css/dist/js/materialize.min.js";

const LogItem = ({ log, deleteLog }) => {
  const { message, attention, tech, date, id } = log;
  const onLogDelete = () => {
    console.log("On delete Run");
    deleteLog(id);
    M.toast({ html: "Log Deleted" });
  };

  return (
    <li className="collection-item">
      <a
        href="#edit-log-modal"
        className={`modal-trigger ${attention ? "red-text" : "blue-text"}`}
      >
        {message}
      </a>
      <br />
      <span className="grey-text">
        <span className="black-text">ID #{id}</span> last updated by{" "}
        <span className="black-text">{tech}</span> on{" "}
        <Moment format="MMMM Do YYYY, h:mm:ss a">{date}</Moment>
      </span>
      <a href="#!" className="secondary-content" onClick={onLogDelete}>
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

LogItem.prototype = {
  log: PropTypes.object.isRequired,
  deleteLog: PropTypes.func.isRequired
};

export default connect(null, { deleteLog })(LogItem);
