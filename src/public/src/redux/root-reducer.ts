// External
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
// Types
import { RootAction } from './root-types';
// Reducers
import utilsReducer from './utils/utils.reducer';
import eventsReducer from './events/events.reducer';

/**
 * Main reducer for application state management
 * @author Maciej Krawczyk
 */
const persistConfig = {
  key: 'root',
  storage,
};

const rootReducer = combineReducers({
  utils: utilsReducer,
  events: eventsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
export default persistReducer<RootState, RootAction>(persistConfig, rootReducer);
