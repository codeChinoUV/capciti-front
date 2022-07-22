import { applyMiddleware, combineReducers, compose, createStore } from 'redux'
import { authReducer } from '../reducers/authReducer';

// @ts-ignore
const composeEnhancers = (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

const reducers = combineReducers({
  auth: authReducer,
});

export type AppState = ReturnType<typeof reducers>;

export const store = createStore(reducers, composeEnhancers(applyMiddleware()))