import { heroApi } from '../api/api';
import { updateObjectInArray } from "../utils/object-helper";

const SET_HEROES = 'SET_HEROES';
const HERO__DELETE = 'HERO__DELETE';
const HERO__LIKE = 'HERO__LIKE';
const HERO__DISLIKE = 'HERO__DISLIKE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const SHOW__ALL = 'SHOW__ALL';
const SHOW__LIKED = 'SHOW__LIKED';

let ininitializeState = {
  heroes: [],
  isFetching: false,
};

const heroesReducer = (state = ininitializeState, action) => {
  switch (action.type) {

    case SET_HEROES: {
      return { ...state, heroes: action.heroes }
    }

    case HERO__LIKE: {
      const newState = {
        ...state,
        heroes: updateObjectInArray(state.heroes, action.id, "id", { isFavorite: true })
      }
      localStorage.setItem('heroes', JSON.stringify(newState.heroes));
      return newState;
    }

    case HERO__DISLIKE: {
      const newState = {
        ...state,
        heroes: updateObjectInArray(state.heroes, action.id, "id", { isFavorite: false })
      }
      localStorage.setItem('heroes', JSON.stringify(newState.heroes));
      return newState;
    }

    case HERO__DELETE: {
      const newState = { ...state, heroes: state.heroes.filter(({id}) => id !== action.id) }
      localStorage.setItem('heroes', JSON.stringify(newState.heroes));
      return newState;
    }

    default:
      return state;
  }
}

export const setHeroes = (heroes) => {
  return {
    type: SET_HEROES,
    heroes
  }
}

export const setLikeHero = (id) => {
  return {
    type: HERO__LIKE,
    id
  }
}

export const likeHero = (id) => {
  return (dispatch) => {
    dispatch(setLikeHero(id));
  }
}

export const setDislikeHero = (id) => {
  return {
    type: HERO__DISLIKE,
    id
  }
}

export const dislikeHero = (id) => {
  return (dispatch) => {
    dispatch(setDislikeHero(id));
  }
}

export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}

export const setDeleteHero = (id) => {
  return {
    type: HERO__DELETE,
    id
  }
}

export const deleteHero = (id) => {
  return (dispatch) => {
    dispatch(setDeleteHero(id));
  }
}

export const getHeroes = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    if (localStorage.getItem('heroes') === null) {
      const data = await heroApi.getHeroes();
      localStorage.setItem('heroes', JSON.stringify(data));
      dispatch(setHeroes(data));
    } else {
      dispatch(setHeroes(JSON.parse(localStorage.getItem('heroes'))));
    }
    dispatch(setIsFetching(false));
  }
}

export const getBoolFetching = (state) => {
  return state.heroes.isFetching;
}

export const getAllHeroes = (state) => {
  return state.heroes.heroes;
}

export default heroesReducer;