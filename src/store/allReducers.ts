import { combineReducers } from 'redux';
import BoardReducer from './board/reducer';

const allReducers = combineReducers({
  BoardReducer,
});

export type AppState = ReturnType<typeof allReducers>;
export default allReducers;
