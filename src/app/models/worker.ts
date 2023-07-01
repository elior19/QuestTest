import {Flight} from './flight';

export class Worker {
  private _id: number;
  private _name: string;
  private _flights: Flight[];

  constructor(id?: number, name?: string, flights?: Flight[]) {
    this.id = id;
    this.name = name;
    this.flights = flights;
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get name(): string {
    return this._name;
  }

  set name(value: string) {
    this._name = value;
  }

  get flights(): Flight[] {
    return this._flights;
  }

  set flights(value: Flight[]) {
    this._flights = value;
  }

  setJson(workerJson: any): Worker {
    this.id = workerJson.id;
    this.name = workerJson.name;
    return this;
  }
}
