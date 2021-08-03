import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-architects-modal',
  templateUrl: './architects-modal.component.html',
  styleUrls: ['./architects-modal.component.css']
})

export class ArchitectsModalComponent implements OnInit {

  emailFormControl = new FormControl('', [
    Validators.required,
    Validators.email,
  ]);
  

  constructor() { }

  ngOnInit(): void {
  }
  

}
