import { faker } from '@faker-js/faker';
import { Mappable } from './Map';

export class Company implements Mappable {
  name: string;
  phrase: string;
  location: {
    lat: number;
    lng: number;
  };

  constructor() {
    this.name = faker.company.name();
    this.phrase = faker.company.catchPhrase();
    this.location = {
      lat: parseFloat(faker.address.latitude()),
      lng: parseFloat(faker.address.longitude()),
    };
  }

  markerContent(): string {
    return this.name + ' --- ' + this.phrase;
  }
}
