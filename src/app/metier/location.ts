import { Point } from 'leaflet';

export class Location {
  [x: string]: any;
    constructor(
        public id: number,
        public description: string,
        public centre_geo: Point) { }

}