import { actions } from "./index";

//Get logs from server
export const getLogs = () => async dispatch => {
  try {
    setLoading();
    const response = await fetch("http://localhost:3001/logs");
    const result = await response.json();
    dispatch({
      type: actions.GET_LOGS,
      data: result
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      data: err.response.statusText
    });
  }
};

//Add LogItem
export const addLog = log => async dispatch => {
  try {
    setLoading();
    const response = await fetch("http://localhost:3001/logs", {
      method: "POST",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    dispatch({
      type: actions.ADD_LOG,
      data: result
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      data: err.response.statusText
    });
  }
};
// Delete Log
export const deleteLog = id => async dispatch => {
  try {
    setLoading();
    await fetch(`http://localhost:3001/logs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: actions.DELETE_LOG,
      data: id
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      data: err.response.statusText
    });
  }
};

// Update Log
export const updateLog = log => async dispatch => {
  try {
    setLoading();
    const response = await fetch(`http://localhost:3001/logs/${log.id}`, {
      method: "PUT",
      body: JSON.stringify(log),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const data = await response.json();
    dispatch({
      type: actions.UPDATE_LOG,
      data
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      data: err.response.statusText
    });
  }
};

export const searchLogs = text => async dispatch => {
  try {
    setLoading();
    const response = await fetch(`http://localhost:3001/logs?q=${text}`);
    const result = await response.json();
    dispatch({
      type: actions.SEARCH_LOGS,
      data: result
    });
  } catch (err) {
    dispatch({
      type: actions.LOGS_ERROR,
      data: err.response.statusText
    });
  }
};

// Set current log
export const setCurrent = log => {
  return {
    type: actions.SET_CURRENT,
    data: log
  };
};

// Clear current log
export const clearCurrent = () => {
  return {
    type: actions.CLEAR_CURRENT
  };
};

// Set Loading to TRUE
export const setLoading = () => ({
  type: actions.SET_LOADING
});
