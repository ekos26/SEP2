import axios from 'axios';

//actions
const GET_CAMPUSES = 'GET_CAMPUSES';

//action creators
const getCampuses = campuses => {
  return {
    type: GET_CAMPUSES,
    campuses,
  };
};

//thunk creator
export const fetchingCampuses = () => {
  return async dispatch => {
    try {
      let res = await axios.get('/api/campuses');
      let campuses = res.data;
      const action = getCampuses(campuses);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer

const initialState = [];

export const campusesReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_CAMPUSES:
      return [action.campuses];

    default:
      return state;
  }
};

// export default campusesReducer;
