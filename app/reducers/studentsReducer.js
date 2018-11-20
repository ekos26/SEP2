import axios from 'axios';

//actions
const GET_STUDENTS = 'GET_STUDENTS';

//action creators
const getStudents = students => {
  return {
    type: GET_STUDENTS,
    students,
  };
};

//thunk creator
export const fetchingStudents = () => {
  return async dispatch => {
    try {
      let res = await axios.get('/api/students');
      let students = res.data;
      const action = getStudents(students);
      dispatch(action);
    } catch (error) {
      console.error(error);
    }
  };
};

//reducer

const initialState = [];

export const studentsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_STUDENTS:
      return [action.students];

    default:
      return state;
  }
};

// export default studentsReducer;
