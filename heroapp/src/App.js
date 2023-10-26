import './App.css';
import _ from 'lodash';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import { Provider } from 'react-redux';
import AllHeroesList from './components/AllHeroesList/AllHeroesList';
import LikedHeroesList from './components/LikedHeroesList/LikedHeroesList';
import store from "./redux/redux-store";
import { getUIState } from './redux/UI-reducer';
import ToggleBtn from './components/ToggleBtn/ToggleBtn';


function App (props) {

  return (
    <Router>
      <Provider store={store} >
        <div className="App">
          <h1 className='App__title'>HeroLike</h1>
          <p className='App__subtitle'>Like your favorites, delete your hatred</p>
          <ToggleBtn />
          <Routes>
            <Route path="/heroCards" element={<AllHeroesList />} />
            <Route path="/likedheroes" element={<LikedHeroesList />} />
          </Routes>
        </div>
      </Provider>
    </Router>
  );
}

let mapStateToProps = (state) => {
  return {
    sOnlyLikedShowen: getUIState(state),
  }
};

export default App;
