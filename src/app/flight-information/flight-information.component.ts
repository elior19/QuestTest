import {Component, OnInit} from '@angular/core';
import {FlightInformation} from '../models/flightInformation';
import {selectFlightInformation} from '../store/selectors';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-flight-information',
  templateUrl: './flight-information.component.html',
  styleUrls: ['./flight-information.component.css']
})
export class FlightInformationComponent implements OnInit {

  private _flightInformation: FlightInformation = null;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.select(selectFlightInformation).subscribe((flightInformation: FlightInformation) => {
      this.flightInformation = flightInformation;
    });
  }

  get flightInformation(): FlightInformation {
    return this._flightInformation;
  }

  set flightInformation(value: FlightInformation) {
    this._flightInformation = value;
  }
}
