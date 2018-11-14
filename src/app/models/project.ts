export class Project {
    id: string;
    name: string;
    creator: string;
    organisation: string;

    constructor(id: string, name: string, creator: string, organisation: string){
        this.id = id;
        this.name = name;
        this.creator = creator;
        this.organisation = organisation;
    }
}