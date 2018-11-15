export class Data {
    output: Array<Number>;
    time: Array<string>;
    slug: string;
    irigation_number: number;
    date: string;
    
    constructor(slug: string){
        this.output = [];
        this.time = [];
        this.slug = slug;
        this.irigation_number = 0;
    }

    addDataPoint(output_point: Number, time_point: string){
        if (output_point == 0 && this.output[this.output.length - 1] != 0){
            this.irigation_number += 1;
        }
        this.output.push(output_point);
        var [date, time] = this.treatTimePoint(time_point);
        this.date = date;
        this.time.push(time);
    }

    isEmpty(){
        return this.output.length == 0;
    }

    treatTimePoint(time_point: string){
        
        time_point = time_point.substring(0, time_point.length-1);
        return time_point.split('T');
    }
}