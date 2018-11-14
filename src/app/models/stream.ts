export class Stream {
    id: string;
    device: string;
    slug: string;
    input_unit: string;
    output_unit: string;
    project: string;

    constructor(id: string, device: string, slug: string, input_unit: string, output_unit: string, project: string){
        this.id = id;
        this.device = device;
        this.slug = slug;
        this.input_unit = input_unit;
        this.output_unit = output_unit;
        this.project = project;
    }
}