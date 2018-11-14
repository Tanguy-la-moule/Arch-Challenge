import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { DataService } from '../../services/data/data.service';
import { Project } from '../../models/project'
import { Stream } from '../../models/stream'

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.css']
})
export class ProjectPickerComponent implements OnInit {
  token: string;
  projects: Project[];
  selected_project: string;
  selected_streams: Stream[];

  streams: Stream[];

  constructor(private router: Router, private projectService: ProjectService, private dataService: DataService) { }

  ngOnInit() {
    this.token = localStorage.getItem('TOKEN');
    if (this.token === null) {
      this.router.navigate(['login'])
    } else {
      this.get_projects();
    }
  }

  update_selected_project(project_id){
    if(this.selected_project === project_id){
      this.selected_project = '';
    } else {
      this.get_selected_streams(project_id);
      this.selected_project = project_id;
    }
  }

  get_selected_streams(id){
    this.dataService.get_projects_stream(id).subscribe(res => {
      this.selected_streams = []
      res.results.forEach((result) => {
        const stream = new Stream(result.id, result.device, result.slug, result.input_unit.unit_full, result.output_unit.unit_full, result.project_id);
        this.selected_streams.push(stream);
      })
    });
  }

  get_projects(){
    this.projectService.get_projects().subscribe(res => {
      this.projects = []
      res.results.forEach((result) => {
        const project = new Project(result.id, result.name, result.created_by, result.org);
        this.projects.push(project);
      })
    }, err => {
      console.log(err);
    })
  }
}
