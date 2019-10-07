import CONSTANTS from './constants';

const initialState = {
  wards: [],
  dashboardLoading: false,
  error: ''
};

const wards = (store = initialState, action) => {
  switch (action.type) {
    case CONSTANTS.ADD_WARDS:
      return {
        ...store,
        wards: action.payload
      };
    case CONSTANTS.FETCH_ERROR:
      return {
        ...store,
        error: 'there was an error'
      };
    case CONSTANTS.TOGGLE_LOADING:
      return {
        ...store,
        dashboardLoading: action.payload
      };
    default:
      return store;
  }
};

export default wards;
