import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { Project } from '../../models/project'

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.css']
})
export class ProjectPickerComponent implements OnInit {
  token: string;
  projects: Project[];

  constructor(private router: Router, private projectService: ProjectService) { }

  ngOnInit() {
    this.token = localStorage.getItem('TOKEN');
    if (this.token === null) {
      this.router.navigate(['login'])
    } else {
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

  get_details(id){
    this.projectService.get_projects_details(id).subscribe(res => {
      console.log(res);
    });
  }
}
