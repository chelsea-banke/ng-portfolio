import { Component, OnInit } from '@angular/core';
import { Project } from 'src/app/interfaces/project';
import { Projects } from 'src/assets/data/projects';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = Projects;
  constructor() { }

  ngOnInit(): void {
  }

}
