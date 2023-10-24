import { applyMiddleware, combineReducers, compose, legacy_createStore as createStore } from 'redux';
import heroesReducer from './allHeroes-reducer';
import thunkMiddleWare from 'redux-thunk';

let reducers = combineReducers({
  heroes: heroesReducer
})

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(
  applyMiddleware(thunkMiddleWare)
));

export default store;