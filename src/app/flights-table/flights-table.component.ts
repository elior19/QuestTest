import {Component, OnInit} from '@angular/core';
import {Flight} from '../models/flight';
import {Store} from '@ngrx/store';
import {selectFlights} from '../store/selectors';
import {SetFlightInformation} from '../store/actions';
import {FlightInformation} from '../models/flightInformation';

@Component({
  selector: 'app-flights-table',
  templateUrl: './flights-table.component.html',
  styleUrls: ['./flights-table.component.css']
})
export class FlightsTableComponent implements OnInit {

  private _displayedColumns: string[] = ['flightNumber', 'origin', 'originDate', 'destination', 'destinationDate'];
  private _flightsList: Flight[] = [];
  private _selectedFlightNumber: string;

  constructor(private _store: Store<any>) { }

  ngOnInit() {
    this._store.select(selectFlights).subscribe((flights: Flight[]) => {
      this.flightsList = flights;
      // TODO: need to dispatch the first flight information here?
    });
  }

  get displayedColumns(): string[] {
    return this._displayedColumns;
  }

  set displayedColumns(value: string[]) {
    this._displayedColumns = value;
  }

  get flightsList(): any {
    return this._flightsList;
  }

  set flightsList(value: any) {
    this._flightsList = value;
  }

  get selectedFlightNumber(): string {
    return this._selectedFlightNumber;
  }

  set selectedFlightNumber(value: string) {
    this._selectedFlightNumber = value;
  }

  onFlightClicked(flight: Flight): void {
    // TODO: is it opened in the beginning on the first fly? or only when clicked?

    this.selectedFlightNumber = flight.flightNumber;

    let flightInformation: FlightInformation = flight.flightInformation;
    this._store.dispatch(new SetFlightInformation({flightInformation}));
  }
}
