import React, { useState, useEffect } from "react";
import LogItem from "./LogItem";
import Preloader from "../Layout/Preloader";
const Logs = () => {
  const [logs, setLogs] = useState([]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    getLogs();
    //eslint-disable-next-line
  }, []);
  const getLogs = async () => {
    setLoading(true);
    setTimeout(async () => {
      let res = await fetch("http://localhost:3001/logs");
      const data = await res.json();
      setLogs(data);
      setLoading(false);
    }, 1000);
  };
  if (loading) {
    return <Preloader />;
  } else {
    return (
      <ul className="collection with-header">
        <li className="collection-header">
          <h4 className="center">System Logs</h4>
        </li>
        {!loading && logs.length === 0 ? (
          <p className="center">No logs to show...</p>
        ) : (
          logs.map(log => <LogItem key={log.id} log={log} />)
        )}
      </ul>
    );
  }
};

export default Logs;
