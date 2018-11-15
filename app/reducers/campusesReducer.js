import Axios from 'axios';

//actions
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creators
const getCampuses = campuses => ({
  type: GET_CAMPUSES,
  campuses,
});

//thunk creator
export const fetchingCampuses = () => {
  return async dispatch => {
    let res = await Axios.get('/api/campuses');
    let campuses = res.data;
    const action = getCampuses(campuses);
    dispatch(action);
  };
};

//reducer

const initialState = [];

const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return [action.campuses];

    default:
      return state;
  }
};

export default campusesReducer;
