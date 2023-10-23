import { createAction } from 'redux-actions';

export const removeHero = createAction('HERO_REMOVE');
export const likeHero = createAction('HERO_LIKE');
export const dislikeHero = createAction('HERO_DISLIKE');