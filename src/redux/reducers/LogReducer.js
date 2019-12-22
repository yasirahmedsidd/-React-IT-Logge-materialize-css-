import { actions } from "../actions";
const initialState = {
  logs: [],
  current: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.SET_CURRENT:
      return {
        ...state,
        current: data
      };

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

    case actions.UPDATE_LOG:
      return {
        ...state,
        logs: state.logs.map(log => (log.id === data.id ? data : log)),
        loading: false,
        current: null
      };
    case actions.SEARCH_LOGS:
      return {
        ...state,
        logs: data
      };

    case actions.CLEAR_CURRENT:
      return {
        ...state,
        current: null
      };

    case actions.SET_LOADING:
      return { ...state, loading: true };
    case actions.LOGS_ERROR:
      return { ...state, error: data };
    default:
      return state;
  }
};
