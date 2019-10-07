import CONSTANTS from './constants';
// import axios from 'axios';

export const addWardsAction = wards => ({
  type: CONSTANTS.ADD_WARDS,
  payload: wards
});

export const toggleLoading = bool => ({
  type: CONSTANTS.TOGGLE_LOADING,
  payload: bool
});

export const fetchWardsAction = () => {
  const url = 'https://city-councillors-api.herokuapp.com/';
  // const url = 'http://localhost:8080';
  return async function(dispatch) {
    //toggle loading to true
    dispatch(toggleLoading(true));
    const response = await fetch(url)
      .then(res => res.json())
      .then(res => res[0].data)
      .catch(err => dispatch(fetchErrorAction(err)));
    dispatch(addWardsAction(response));
    //toggle loading to false
    dispatch(toggleLoading(false));
  };
};

export const fetchErrorAction = error => ({
  type: CONSTANTS.FETCH_ERROR,
  payload: error
});
