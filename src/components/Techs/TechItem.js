import React from "react";
import PropTypes from "prop-types";
import M from "materialize-css/dist/js/materialize.min.js";
import { deleteTech } from "../../redux/actions/TechActions";
import { connect } from "react-redux";
const TechItem = ({ tech: { id, firstName, lastName }, deleteTech }) => {
  const onDeleteHandler = () => {
    deleteTech(id);
    M.toast({
      html: `${firstName} ${lastName} has benn deleted`,
      inDuration: 250,
      outDuration: 250,
      classes: "rounded red"
    });
  };
  return (
    <li key={id} className="collection-item">
      <div>
        {`${firstName} ${lastName}`}
        <a onClick={onDeleteHandler} href="#!" className="secondary-content">
          <i className="material-icons grey-text"> delete</i>
        </a>
      </div>
    </li>
  );
};

TechItem.prototype = {
  tech: PropTypes.object.isRequired,
  deleteTech: PropTypes.func.isRequired
};
export default connect(null, { deleteTech })(TechItem);
