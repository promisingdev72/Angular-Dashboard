import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-projects-modal',
  templateUrl: './projects-modal.component.html',
  styleUrls: ['./projects-modal.component.css']
})
export class ProjectsModalComponent implements OnInit {

  fontStyleControl = new FormControl();
  fontStyle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
