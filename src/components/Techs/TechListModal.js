import React, { useState, useEffect } from "react";
import Techitem from "./TechItem";
const TechListModal = () => {
  const [techs, setTechs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getTechs();
    //eslint-disable-next-line
  }, []);
  const getTechs = async () => {
    setLoading(true);
    let res = await fetch("http://localhost:3001/techs");
    const data = await res.json();
    setTechs(data);
    setLoading(false);
  };

  return (
    <div id="tech-list-modal" className="modal" style={{ width: "50%" }}>
      <div className="modal-content ">
        <h4>Technician List</h4>
        <ul className="collection">
          {!loading &&
            techs.map(tech => <Techitem tech={tech} key={tech.id} />)}
        </ul>
      </div>
    </div>
  );
};

export default TechListModal;
