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
      data: err.response.data
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
      data: err.response.data
    });
  }
};
// Delete Log
//Get logs from server
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
      data: err.response.data
    });
  }
};

// Set Loading to TRUE
export const setLoading = () => ({
  type: actions.SET_LOADING
});
