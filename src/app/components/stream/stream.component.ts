import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProjectService } from '../../services/projects/project.service';
import { DataService } from '../../services/data/data.service';
import { Stream } from '../../models/stream'


@Component({
  selector: 'app-stream',
  templateUrl: './stream.component.html',
  styleUrls: ['./stream.component.css']
})
export class StreamComponent implements OnInit {
  @Input() streams: Stream[];
  selected_stream: string;
  selected_slug: string;
  
  constructor(private router: Router, private projectService: ProjectService, private dataService: DataService) { }

  ngOnInit() {
  }

  update_selected_stream(stream_id, stream_slug){
    if(this.selected_stream === stream_id){
      this.selected_stream = '';
    } else {
      this.selected_stream = stream_id;
      this.selected_slug = stream_slug;
    }
  }
}
