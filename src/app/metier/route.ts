import { Picture } from './picture';
import { Location } from "./location";

export class Route {
constructor(
    public id: number,
    public dateDeroulement: Date,
    public dateModification: Date,
    public nomCreateur: string,
    public image: Picture,
    public locations: Location [],
    public nomRoute: string) { }
}
