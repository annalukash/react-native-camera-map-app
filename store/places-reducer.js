import * as actionTypes from './places-actionTypes';
import Place from '../models/place';
const initialState = {
    places: []
};

export default (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.ADD_PLACE:
            const newPlace = new Place(new Date().toString(), action.placeData.title)
            return {
                ...state,
                places: state.places.concat(newPlace)
            };
        default:
            return state;
    }
};
