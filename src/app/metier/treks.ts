import { Route } from 'src/app/metier/route';
import { Picture } from './picture';

export class Trek {

    public id: number;
    public dateDeCreation: Date;
    public dateDeroulement: Date;
    public description: string;
    public nom: string;
    public organisateur: string;
    public image: Picture;
    public routes: Route[];
    constructor(
        data: {
            id?: number,
            dateDeCreation?: Date,
            dateDeroulement?: Date,
            description?: string,
            nom?: string,
            organisateur?: string,
            image?: Picture,
            routes?: Route[]
        }) {
        
        this.id = data ? data.id : null;
        this.dateDeCreation = data ? data.dateDeCreation : null;
        this.dateDeroulement = data ? data.dateDeroulement : null;
        this.description = data ? data.description : null;
        this.nom = data ? data.nom : null;
        this.organisateur = data ? data.organisateur : null;
        this.image = data ? data.image : null;
        this.routes = data ? data.routes : [];

    }

}
