import { Component } from '@angular/core';
import {DataReceiverService} from './services/data-receiver.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'quest';

  constructor(private _dataReceiverService: DataReceiverService) { }
}
