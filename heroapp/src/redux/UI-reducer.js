const SHOW__ALL = 'SHOW__ALL';
const SHOW__LIKED = 'SHOW__LIKED';

let ininitializeState = {
    isOnlyLikedShowen: false,
};

const UIReducer = (state = ininitializeState, action) => {
    switch (action.type) {

    case SHOW__ALL: {
        return { ...state, isOnlyLikedShowen: action.isOnlyLikedShowen }
    }

    case SHOW__LIKED: {
        return { ...state, isOnlyLikedShowen: action.isOnlyLikedShowen }
    }

    default:
        return state;
    }
}

export const setShowAllGeroes = (isOnlyLikedShowen) => {
    return {
        type: SHOW__ALL,
        isOnlyLikedShowen: isOnlyLikedShowen
    }
}

export const showAllHeroes = () => {
    return (dispatch) => {
        dispatch(setShowAllGeroes(false));
    }
}

export const setShowLikedGeroes = (isOnlyLikedShowen) => {
    return {
        type: SHOW__LIKED,
        isOnlyLikedShowen: isOnlyLikedShowen
    }
}

export const showLikedHeroes = () => {
    return (dispatch) => {
    dispatch(setShowLikedGeroes(true));
    }
}

export const getUIState = (state) => {
    return state.UI.isOnlyLikedShowen;
    }

export default UIReducer;