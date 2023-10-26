import './App.css';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import { Provider } from 'react-redux';
import AllHeroesList from './components/AllHeroesList/AllHeroesList';
import LikedHeroesList from './components/LikedHeroesList/LikedHeroesList';
import store from "./redux/redux-store";


function App() {

  return (
    <Router>
      <Provider store={store} >
        <div className="App">
          <h1 className='App__title'>HeroLike</h1>
          <p className='App__subtitle'>Like your favorites, delete your hatred</p>
          <button className='App__btn'><Link className='App__link' to="/likedheroes">Look my favorite heroes</Link></button>
          <Routes>
            <Route path="/heroCards" element={<AllHeroesList />} />
            <Route path="/likedheroes" element={<LikedHeroesList />} />
          </Routes>
        </div>
      </Provider>

    </Router>
  );
}

export default App;
