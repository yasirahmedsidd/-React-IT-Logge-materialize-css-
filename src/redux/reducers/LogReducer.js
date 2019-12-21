import { actions } from "../actions";
const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.GET_LOGS:
      return { ...state, logs: data, loading: false };
    case actions.ADD_LOG:
      return { ...state, logs: [...state.logs, data], loading: false };
    case actions.DELETE_LOG:
      return {
        ...state,
        logs: state.logs.filter(log => log.id !== data),
        loading: false
      };

    case actions.SET_LOADING:
      return { ...state, loading: true };
    case actions.LOGS_ERROR:
      return { ...state, error: data };
    default:
      return state;
  }
};
