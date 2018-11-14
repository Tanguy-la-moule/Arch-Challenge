import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { DataService } from '../../services/data/data.service';
import { Stream } from '../../models/stream'
import { Chart } from 'chart.js';


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  input: number[];
  output: number[];
  time: string[];
  chart;

  constructor(private router: Router, private projectService: ProjectService, private dataService: DataService) { }

  ngOnInit() {
    this.dataService.get_stream_data('s--0000-002e--0000-0000-0000-0034--5001').subscribe(res => {
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
