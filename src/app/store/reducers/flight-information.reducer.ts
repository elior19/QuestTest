import {EActionTypes} from '../action-types.enum';
import {FlightInformation} from '../../models/flightInformation';
import {SetFlightInformation} from '../actions';

export function flightInformationReducer(state = null, action: SetFlightInformation): FlightInformation {
  switch (action.type) {
    case EActionTypes.SET_FLIGHT_INFORMATION: {
      if(action.payload) {
        return new FlightInformation(action.payload.flightInformation.planeNumber,
          action.payload.flightInformation.duration,
          action.payload.flightInformation.originGate,
          action.payload.flightInformation.destinationGate);
      } else {
        return null;
      }
    }

    default: {
      return state;
    }
  }
}

