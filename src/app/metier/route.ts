import { Picture } from './picture';

export class Route {
constructor(
    public id: number,
    public dateDeroulement: Date,
    public dateModification: Date,
    public nomCreateur: string,
    public image: Picture,
    public trajet: Location []) { }
}
