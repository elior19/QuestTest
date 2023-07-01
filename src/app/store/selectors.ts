import {createSelector} from '@ngrx/store';
import {AppState} from './app-state';

export const workersFeature = (state: AppState) => state.workers;
export const selectWorkers = createSelector(workersFeature, (state: any) => state);

export const flightsFeature = (state: AppState) => state.flights;
export const selectFlights = createSelector(flightsFeature, (state: any) => state);

export const flightInformationFeature = (state: AppState) => state.flightInformation;
export const selectFlightInformation = createSelector(flightInformationFeature, (state: any) => state);
