import {EActionTypes} from '../action-types.enum';
import {SetFlights} from '../actions';
import {Flight} from '../../models/flight';

export function flightsReducer(state = [], action: SetFlights): Flight[] {
  switch (action.type) {
    case EActionTypes.SET_FLIGHTS: {
      return [].concat(action.payload.flights);
    }

    default: {
      return state;
    }
  }
}

