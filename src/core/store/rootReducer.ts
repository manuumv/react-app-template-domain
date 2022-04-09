import { combineReducers } from 'redux';
import { countReducer } from 'containers/count/reducer/count.reducer';
import { ReduxState } from '../model/reduxState';

export const rootReducer = combineReducers<ReduxState>({
  count: countReducer,
});
