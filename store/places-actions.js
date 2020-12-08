import * as actionTypes from './places-actionTypes';

export const addPlace = (title) => {
    return { type: actionTypes.ADD_PLACE, placeData: { title }};
};