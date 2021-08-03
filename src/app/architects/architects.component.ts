import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ArchitectsModalComponent } from '../components/architects-modal/architects-modal.component';


interface Team {
  value: string;
  teamName: string;
}

interface Skill {
  value: string;
  skillName: string;
}

interface TableData {
  name: string;
  level: string;
  team: string;
  allocation: string;
  actuallproject: string;
  editclass: string;
}

export const Teams: Team[] = [
  {value: 'barcelona', teamName: 'FC Barcelona'},
  {value: 'real-madrid', teamName: 'Real Madrid CF'},
  {value: 'manchester-united', teamName: 'Manchester United F.C.'}
];

export const Skills: Skill[] = [
  {value: 'attacker', skillName: 'Attacker'},
  {value: 'defender', skillName: 'Defender'},
  {value: 'goal-keeper', skillName: 'Goal Keeper'}
];

export const TableDatas: TableData[] = [
  {name:'Marcelo Azevedo', level:'L5',team:'Cloud Engineer [Leader]',allocation:'100%',actuallproject:'JBFO [20%] Ultius [80%]',editclass:'far fa-edit'},
  {name:'Gobriel concenza', level:'L6',team:'LAB',allocation:'80%',actuallproject:'GFT TechOffice [80%]',editclass:'far fa-edit'},
  {name:'Gobriel Matsudo', level:'L5',team:'Data Engineer',allocation:'140%',actuallproject:'GFT TechOffice [40%] Galgo [100%]',editclass:'far fa-edit'},
  {name:'Gobriel concenza', level:'L6',team:'LAB',allocation:'80%',actuallproject:'GFT TechOffice [80%]',editclass:'far fa-edit'},
  {name:'Gobriel Matsudo', level:'L5',team:'Data Engineer',allocation:'140%',actuallproject:'GFT TechOffice [40%] Galgo [100%]',editclass:'far fa-edit'},
];


@Component({
  selector: 'app-architects',
  templateUrl: './architects.component.html',
  styleUrls: ['./architects.component.css']
})
export class ArchitectsComponent implements OnInit {

  teams:any;
  skills:any;
  tabledatas:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.teams = Teams.filter(Teams => Teams);
    this.skills = Skills.filter(Skills => Skills);
    this.tabledatas = TableDatas.filter(TableDatas => TableDatas);
  }
  architectsModal(){
    this.dialog.open(ArchitectsModalComponent);
  }
}
