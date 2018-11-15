import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { DataService } from '../../services/data/data.service';
import { Chart } from 'chart.js';
import { Data } from '../../models/data'

@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {
  @Input() slug: string;
  isEmpty: boolean;
  loaded: boolean;
  data: Data;
  chart;
  ctx;
  

  constructor(private router: Router, private projectService: ProjectService, private dataService: DataService) { }

  ngOnInit() {
    var ctx = document.getElementById("canvas");
    this.loaded = false;
    this.dataService.get_stream_data(this.slug).subscribe(data => {
      this.data = data;
      this.isEmpty = data.isEmpty();
      this.loaded = true;
      if(!this.isEmpty){
        this.chart = new Chart(ctx, {
          type: 'line',
          data: {
            labels: this.data.time,
            datasets: [{ data: this.data.output, borderColor: "#3cba9f", fill: false }]
          },
          options: {
            legend: { display: false },
            scales: { xAxes: [{ display: true }], yAxes: [{ display: true }]}
          }
        });
      }
    })
  }
}
