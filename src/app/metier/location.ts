import { Point } from 'leaflet';

export class Location {
    constructor(
        public id: number,
        public description: string,
        public centre_geo: Point) { }

}