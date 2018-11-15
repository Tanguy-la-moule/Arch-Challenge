export class Stream {
    id: string;
    device: string;
    slug: string;
    unit: string;
    project: string;

    constructor(id: string, device: string, slug: string, unit: string, project: string){
        this.id = id;
        this.device = device;
        this.slug = slug;
        this.unit = unit;
        this.project = project;
    }
}