export class FlightInformation {

  private _planeNumber: string;
  private _duration: number;
  private _originGate: number;
  private _destinationGate: number;

  constructor(planeNumber?: string, duration?: number, originGate?: number, destinationGate?: number) {
    this.planeNumber = planeNumber;
    this.duration = duration;
    this.originGate = originGate;
    this.destinationGate = destinationGate;
  }

  get planeNumber(): string {
    return this._planeNumber;
  }

  set planeNumber(value: string) {
    this._planeNumber = value;
  }

  get duration(): number {
    return this._duration;
  }

  set duration(value: number) {
    this._duration = value;
  }

  get originGate(): number {
    return this._originGate;
  }

  set originGate(value: number) {
    this._originGate = value;
  }

  get destinationGate(): number {
    return this._destinationGate;
  }

  set destinationGate(value: number) {
    this._destinationGate = value;
  }

  setJson(flightInformationJson: any): FlightInformation {
    this.planeNumber = flightInformationJson.plane;
    this.duration = flightInformationJson.duration;
    this.originGate = flightInformationJson.from_gate;
    this.destinationGate = flightInformationJson.to_gate;
    return this;
  }
}
