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
import AllHeroesList from './components/AllHeroesList/AllHeroesList';
import LikedHeroesList from './components/LikedHeroesList/LikedHeroesList';
import normalizeData from './normalizeData';

const data = await axios.get("https://akabab.github.io/superhero-api/api/all.json");
console.log(data.data);
console.log(normalizeData(data.data));

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
