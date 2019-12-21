import React, { useEffect } from "react";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css";
import SearchBar from "./components/Layout/SearchBar";
import Logs from "./components/Logs/Logs";
import AddBtn from "./components/Layout/AddBtn";
import AddLogModal from "./components/Logs/AddLogModal";
import EditLogModal from "./components/Logs/EditLogModal";
import AddTechModal from "./components/Techs/AddTechModal";
import TechListModal from "./components/Techs/TechListModal";


const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  }, []);
  return (
    <>
      <SearchBar />
      <div className="container">
        <AddBtn />
        <AddLogModal />
        <Logs />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
      </div>
    </>
  );
};

export default App;
