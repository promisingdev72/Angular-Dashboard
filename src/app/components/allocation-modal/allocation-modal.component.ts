import { Component, OnInit } from '@angular/core';
import {FormControl} from '@angular/forms';


@Component({
  selector: 'app-allocation-modal',
  templateUrl: './allocation-modal.component.html',
  styleUrls: ['./allocation-modal.component.css']
})
export class AllocationModalComponent implements OnInit {

  fontStyleControl = new FormControl();
  fontStyle?: string;

  constructor() { }

  ngOnInit(): void {
  }

}
