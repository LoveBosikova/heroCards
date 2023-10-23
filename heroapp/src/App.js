import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import AllHeroesList from './components/AllHeroesList/AllHeroesList';
import LikedHeroesList from './components/LikedHeroesList/LikedHeroesList';

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
