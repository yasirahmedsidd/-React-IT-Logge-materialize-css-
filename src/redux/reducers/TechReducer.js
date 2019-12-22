import { actions } from "../actions/TechActions";
const initialState = {
  techs: null,
  loading: false,
  error: null
};

export default (state = initialState, { type, data }) => {
  switch (type) {
    case actions.GET_TECHS:
      return {
        ...state,
        techs: data,
        loading: false
      };
    case actions.ADD_TECHS:
      return {
        ...state,
        techs: [...state.techs, data],
        loading: false
      };

    case actions.DELETE_TECHS:
      return {
        ...state,
        techs: [state.techs.filter(t => t.id !== data)],
        loading: false
      };

    case actions.SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case actions.TECHS_ERROR:
      console.error(data);
      return {
        ...state,
        error: data,
        loading: false
      };

    default:
      return state;
  }
};
