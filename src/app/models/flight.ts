import {FlightInformation} from './flightInformation';

export class Flight {
  private _flightNumber: string;
  private _origin: string;
  private _originDate: string;
  private _destination: string;
  private _destinationDate: string;
  private _flightInformation: FlightInformation;

  constructor(flightNumber?: string, origin?: string, originDate?: string,
              destination?: string, destinationDate?: string, flightInformation?: FlightInformation) {
    this.flightNumber = flightNumber;
    this.origin = origin;
    this.originDate = originDate;
    this.destination = destination;
    this.destinationDate = destinationDate;
    this.flightInformation = flightInformation;
  }

  get flightNumber(): string {
    return this._flightNumber;
  }

  set flightNumber(value: string) {
    this._flightNumber = value;
  }

  get origin(): string {
    return this._origin;
  }

  set origin(value: string) {
    this._origin = value;
  }

  get originDate(): string {
    return this._originDate;
  }

  set originDate(value: string) {
    this._originDate = value;
  }

  get destination(): string {
    return this._destination;
  }

  set destination(value: string) {
    this._destination = value;
  }

  get destinationDate(): string {
    return this._destinationDate;
  }

  set destinationDate(value: string) {
    this._destinationDate = value;
  }

  get flightInformation(): FlightInformation {
    return this._flightInformation;
  }

  set flightInformation(value: FlightInformation) {
    this._flightInformation = value;
  }

  setJson(flightJson: any): Flight {
    this.flightNumber = flightJson.num;
    this.origin = flightJson.from;
    this.originDate = flightJson.from_date;
    this.destination = flightJson.to;
    this.destinationDate = flightJson.to_date;
    this.flightInformation = new FlightInformation().setJson(flightJson);
    return this;
  }
}
