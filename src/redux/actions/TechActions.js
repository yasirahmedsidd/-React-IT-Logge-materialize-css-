export const actions = {
  GET_TECHS: "GET_TECHS",
  ADD_TECHS: "ADD_TECHS",
  DELETE_TECHS: "DELETE_TECHS",
  SET_LOADING: "SET_LOADING",
  TECHS_ERROR: "TECHS_ERROR"
};

// Get Techs from Server

export const getTechs = () => async dispatch => {
  try {
    setLoading();
    const response = await fetch("http://localhost:3001/techs");
    const result = await response.json();
    dispatch({
      type: actions.GET_TECHS,
      data: result
    });
  } catch (err) {
    dispatch({
      type: actions.TECHS_ERROR,
      data: err.response.statusText
    });
  }
};

// ADD Tech to Server

export const addTech = tech => async dispatch => {
  try {
    setLoading();
    const response = await fetch("http://localhost:3001/techs", {
      method: "POST",
      body: JSON.stringify(tech),
      headers: {
        "Content-Type": "application/json"
      }
    });
    const result = await response.json();
    dispatch({
      type: actions.ADD_TECHS,
      data: result
    });
  } catch (err) {
    dispatch({
      type: actions.TECHS_ERROR,
      data: err.response.statusText
    });
  }
};

// Delete Tech from Server

export const deleteTech = id => async dispatch => {
  try {
    setLoading();
    await fetch(`http://localhost:3001/techs/${id}`, {
      method: "DELETE"
    });
    dispatch({
      type: actions.DELETE_TECHS,
      data: id
    });
  } catch (err) {
    dispatch({
      type: actions.TECHS_ERROR,
      data: err.response.statusText
    });
  }
};

// set Loading to true
export const setLoading = () => ({
  type: actions.SET_LOADING
});
