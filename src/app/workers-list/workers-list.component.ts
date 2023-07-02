import {Component, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {Store} from '@ngrx/store';
import {Worker} from '../models/worker';
import {selectWorkers} from '../store/selectors';
import {DataReceiverService} from '../services/data-receiver.service';
import {SetFlightInformation} from '../store/actions';

@Component({
  selector: 'app-workers-list',
  templateUrl: './workers-list.component.html',
  styleUrls: ['./workers-list.component.css']
})
export class WorkersListComponent implements OnInit {

  private _workersList: Worker[] = [];
  private _selectedWorkerId: number = 1;

  constructor(private _store: Store<any>, private _dataReceiverService: DataReceiverService) { }

  ngOnInit() {
    this._store.select(selectWorkers).subscribe((workers: Worker[]) => {
      this._workersList = workers;
    });
  }

  get workersList(): Worker[] {
    return this._workersList;
  }

  set workersList(value: Worker[]) {
    this._workersList = value;
  }

  get selectedWorkerId(): number {
    return this._selectedWorkerId;
  }

  set selectedWorkerId(value: number) {
    this._selectedWorkerId = value;
  }

  onWorkerClicked(workerId: number): void {
    this.selectedWorkerId = workerId;
    this._dataReceiverService.getFlightsByWorkerId(workerId);
    // TODO: set null or the first flight of the worker?
    this._store.dispatch(new SetFlightInformation(null));
  }
}
