// `combineReducers` is not currently being used...but it should!
// When you're ready to use it, un-comment the line below!

import { combineReducers } from 'redux';
import campusesReducer from './campusesReducer';

const rootReducer = combineReducers({
  campuses: campusesReducer,
});

export default rootReducer;
