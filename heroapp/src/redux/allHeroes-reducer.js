import { heroApi } from '../api/api'
import { updateObjectInArray } from "../utils/object-helper";

const SET_HEROES = 'SET_HEROES';
const HERO__DELETE = 'HERO__DELETE';
const HERO__LIKE = 'HERO__LIKE';
const HERO__DISLIKE = 'HERO__DISLIKE';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';

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
      return {
        ...state,
        heroes: updateObjectInArray(state.heroes, action.heroId, "id", { isFavorite: true })
      };
    }
    case HERO__DISLIKE: {
      return {
        ...state,
        heroes: updateObjectInArray(state.heroes, action.heroId, "id", { isFavorite: false })

      };
    }
    case HERO__DELETE: {
      return { ...state, heroes: updateObjectInArray(state.heroes, action.heroId, "id", {}, true) }
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

export const dislikeHero = (id) => {
  return {
    type: HERO__DISLIKE,
    id
  }
}

export const setIsFetching = (isFetching) => {
  return {
    type: TOGGLE_IS_FETCHING,
    isFetching: isFetching
  }
}

export const getHeroes = () => {
  return async (dispatch) => {
    dispatch(setIsFetching(true));
    const data = await heroApi.getHeroes()
    dispatch(setHeroes(data));
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