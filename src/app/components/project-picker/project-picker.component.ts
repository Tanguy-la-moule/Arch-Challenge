import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-picker',
  templateUrl: './project-picker.component.html',
  styleUrls: ['./project-picker.component.css']
})
export class ProjectPickerComponent implements OnInit {
  token: string;

  constructor(private router: Router) { }

  ngOnInit() {
    this.token = localStorage.getItem('TOKEN');
    if (this.token === null) {
      this.router.navigate(['login'])
    } else {
      
    }
  }


}
