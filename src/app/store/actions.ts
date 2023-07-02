import {Action} from '@ngrx/store';
import {EActionTypes} from './action-types.enum';
import {Worker} from '../models/worker';
import {Flight} from '../models/flight';
import {FlightInformation} from '../models/flightInformation';

export class SetWorkers implements Action {
  readonly type = EActionTypes.SET_WORKERS;
  constructor(public payload: {workers: Worker[]}) { }
}

export class SetFlights implements Action {
  readonly type = EActionTypes.SET_FLIGHTS;
  constructor(public payload: {flights: Flight[], isClicked: boolean}) { }
}

export class SetFlightInformation implements Action {
  readonly type = EActionTypes.SET_FLIGHT_INFORMATION;
  constructor(public payload: {flightInformation: FlightInformation}) { }
}
