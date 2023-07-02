import {Injectable, OnDestroy} from '@angular/core';
import {Store} from '@ngrx/store';
import {SetFlights, SetWorkers} from '../store/actions';
import {Worker} from '../models/worker';
import {Flight} from '../models/flight';
import {HttpClient} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {environment} from '../../environments/environment';

const MINUTE = 1000*60;

@Injectable({
  providedIn: 'root'
})
export class DataReceiverService implements OnDestroy{
  private interval: any;

  constructor(private _store: Store<{workers: Worker[]}>, private _http: HttpClient) {
    this.getData();
  }

  getData(): void {
    this.getWorkers();

    if (this.interval) {
      // clean the previous worker's flights interval
      clearInterval(this.interval);
    }
    this.getFlightsByWorkerId(1);
    this.interval = setInterval(() => {
      this.getFlightsByWorkerId(1);
    }, MINUTE);
  }

  getWorkers(): void {
    let workers: Worker[] = [];
    let url: string = 'http://' + environment.serverhost + ':' + environment.serverport + '/workers';
    this._http.get<any>(url).subscribe((response: any[]) => {
      response.forEach((worker: any) => {
        workers.push(new Worker().setJson(worker));
      });
      this._store.dispatch(new SetWorkers({workers}));
    });
  }

  getFlightsByWorkerId(workerId: number): void {
    let flights: Flight[] = [];
    let url: string = 'http://' + environment.serverhost + ':' + environment.serverport + '/flights/' + workerId;
    this._http.get<any>(url).subscribe((response: any[]) => {
      response.forEach((flight: any) => {
        flights.push(new Flight().setJson(flight));
      });
      this._store.dispatch(new SetFlights({flights}));
    });
  }

  ngOnDestroy(): void {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }
}
