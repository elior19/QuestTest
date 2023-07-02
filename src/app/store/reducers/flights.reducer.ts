import {EActionTypes} from '../action-types.enum';
import {SetFlights} from '../actions';
import {Flight} from '../../models/flight';

export function flightsReducer(state = {flights: [], isClicked: false}, action: SetFlights): {flights: Flight[], isClicked: boolean} {
  switch (action.type) {
    case EActionTypes.SET_FLIGHTS: {
      return {flights: [].concat(action.payload.flights), isClicked: action.payload.isClicked};
    }

    default: {
      return state;
    }
  }
}

