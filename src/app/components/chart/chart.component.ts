import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { DataService } from '../../services/data/data.service';
import { Chart } from 'chart.js';

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  input: number[];
  output: number[];
  time: string[];
  @Input() slug: string;
  chart;

  constructor(private router: Router, private projectService: ProjectService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get_stream_data(this.slug).subscribe(res => {
      [this.input, this.output, this.time] = this.parse_data(res.results);
      console.log(this.input);
      console.log(this.output);
      console.log(this.time);
      var ctx = document.getElementById("canvas");
      this.chart = new Chart(ctx, {
        type: 'line',
        data: {
          labels: this.time,
          datasets: [
            { 
              data: this.input,
              borderColor: "#3cba9f",
              fill: false
            },
            { 
              data: this.output,
              borderColor: "#ffcc00",
              fill: false
            },
          ]
        },
        options: {
          legend: {
            display: false
          },
          scales: {
            xAxes: [{
              display: true
            }],
            yAxes: [{
              display: true
            }],
          }
        }
      });
    }, err => {
      console.log(err);
    })
  }

  parse_data(data){
    const input = [];
    const output = [];
    const time = [];
    data.forEach(point => {
      input.push(point.value);
      output.push(point.int_value);
      time.push(point.timestamp);
    });
    return [input, output, time]
  }
}
