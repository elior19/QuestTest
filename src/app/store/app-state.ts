import {Worker} from '../models/worker';
import {Flight} from '../models/flight';
import {FlightInformation} from '../models/flightInformation';

export class AppState {
  workers: Worker[];
  flights: {flights: Flight[], isClicked: boolean};
  flightInformation: FlightInformation;
}
