import React from "react";
import Moment from "react-moment";
import PropTypes from "prop-types";

const LogItem = ({ log }) => {
  const { message, attention, tech, date, id } = log;
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
      <a href="#!" className="secondary-content">
        <i className="material-icons grey-text">delete</i>
      </a>
    </li>
  );
};

LogItem.prototype = {
  log: PropTypes.object.isRequired
};

export default LogItem;
