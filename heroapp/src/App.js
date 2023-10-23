import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import { createStore, compose } from 'redux';
import AllHeroesList from './components/AllHeroesList/AllHeroesList';
import LikedHeroesList from './components/LikedHeroesList/LikedHeroesList';
import normalizeData from './normalizeData';

const data = await axios.get("https://akabab.github.io/superhero-api/api/all.json");
console.log(data.data);
// console.log(normalizeData(data.data));

const reducer = (state, action) => {

  switch (action.type) {
    case 'HERO__DELETE':
      return _.omit(state, action.payload.id);
    case 'HERO__LIKE':
      const { id } = action.payload;
      const hero = state.filter(u => u.id === id).map((hero)=> hero = {...hero, liked: true}); 
      return {...state, ...hero};
    case 'HERO__DISLIKE':
      const curhero = state.filter(u => u.id === id).map((hero)=> hero = {...hero, liked: false}); 
      curhero.liked = false;
      console.log(curhero);
      return {...state, ...curhero};
    default: 
      return state;
  }
};

const store = createStore(reducer, normalizeData(data.data));
console.log(store.getState())

store.subscribe(() => console.log(store.getState()));

const likeHero = (id) => ({ type: 'HERO__LIKE',  payload: { id } });
const dislikeHero = (id) => ({ type: 'HERO__DISLIKE', payload: { id } });
const deleteHero = (id) => ({ type: 'HERO__DELETE', payload: { id } });

// // usage
store.dispatch(likeHero(1)); 
store.dispatch(dislikeHero(1)); 
store.dispatch(deleteHero(1));

function App() {

  return (
    <Router>
      <div className="App">
        <h1 className='App__title'>HeroLike</h1>
        <p className='App__subtitle'>Like uor favorites, delete your hatred</p>
        <button><Link to="/likedheroes">About</Link></button>
        <Routes>
            <Route path="/" element={<AllHeroesList />} />
            <Route path="/likedheroes" element={<LikedHeroesList />}/>
        </Routes>
      </div>
    </Router>
  );
}

export default App;
