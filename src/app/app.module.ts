import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppComponent} from './app.component';
import {WorkersListComponent} from './workers-list/workers-list.component';
import {FlightsTableComponent} from './flights-table/flights-table.component';
import {FlightInformationComponent} from './flight-information/flight-information.component';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {StoreModule} from '@ngrx/store';
import {workersReducer} from './store/reducers/workers.reducer';
import {MatTableModule} from '@angular/material/table';
import {flightsReducer} from './store/reducers/flights.reducer';
import {flightInformationReducer} from './store/reducers/flight-information.reducer';
import {HttpClientModule} from '@angular/common/http';
import {TimeDurationPipe} from './pipes/time-duration.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WorkersListComponent,
    FlightsTableComponent,
    FlightInformationComponent,
    TimeDurationPipe
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatTableModule,
    HttpClientModule,
    StoreModule.forRoot({ workers: workersReducer, flights: flightsReducer,
      flightInformation: flightInformationReducer})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
