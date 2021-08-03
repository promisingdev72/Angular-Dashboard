import { Component, OnInit } from '@angular/core';
import { AllocationModalComponent } from '../components/allocation-modal/allocation-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface Team {
  value: string;
  teamName: string;
}

interface Arquitect {
  value: string;
  arquitectName: string;
}


interface Skill {
  value: string;
  skillName: string;
}

interface Client {
  value: string;
  clientName: string;
}

interface Project {
  value: string;
  projectName: string;
}

interface Status {
  value: string;
  statusName: string;
}

interface TableData {
  status: string;
  skill: string;
  arquitect: string;
  project: string;
  period: string;
  percentage:string;
  editclass: string;
}

export const Teams: Team[] = [
  {value: 'barcelona', teamName: 'FC Barcelona'},
  {value: 'real-madrid', teamName: 'Real Madrid CF'},
  {value: 'manchester-united', teamName: 'Manchester United F.C.'}
];

export const Arquitects: Arquitect[] = [
  {value: 'barcelona', arquitectName: 'FC Barcelona'},
  {value: 'real-madrid', arquitectName: 'Real Madrid CF'},
  {value: 'manchester-united', arquitectName: 'Manchester United F.C.'}
];

export const Skills: Skill[] = [
  {value: 'attacker', skillName: 'Attacker'},
  {value: 'defender', skillName: 'Defender'},
  {value: 'goal-keeper', skillName: 'Goal Keeper'}
];

export const Clients: Client[] = [
  {value: 'barcelona', clientName: 'FC Barcelona'},
  {value: 'real-madrid', clientName: 'Real Madrid CF'},
  {value: 'manchester-united', clientName: 'Manchester United F.C.'}
];

export const Projects: Project[] = [
  {value: 'barcelona', projectName: 'FC Barcelona'},
  {value: 'real-madrid', projectName: 'Real Madrid CF'},
  {value: 'manchester-united', projectName: 'Manchester United F.C.'}
];

export const Statuss: Status[] = [
  {value: 'barcelona', statusName: 'FC Barcelona'},
  {value: 'real-madrid', statusName: 'Real Madrid CF'},
  {value: 'manchester-united', statusName: 'Manchester United F.C.'}
];

export const TableDatas: TableData[] = [
  {status:'Open', skill:'Azure [cloud]',arquitect:'-',project:'Transform[JBFO]',period:'15/jan/2021 - 15/dor/2021',percentage:'20%',editclass:'far fa-edit'},
  {status:'Cancel', skill:'Azure [cloud]',arquitect:'Gdoriel Matsudo',project:'Transform[JBFO]',period:'15/jan/2021 - 15/dor/2021',percentage:'80%',editclass:'far fa-edit'},
  {status:'In progress', skill:'Azure [cloud]',arquitect:'-',project:'Transform[JBFO]',period:'15/jan/2021 - 15/dor/2021',percentage:'20%',editclass:'far fa-edit'},
  {status:'Completed', skill:'Azure [cloud]',arquitect:'Gdoriel Matsudo',project:'80%',period:'15/jan/2021 - 15/dor/2021',percentage:'20%',editclass:'far fa-edit'},
  {status:'Open', skill:'Azure [cloud]',arquitect:'-',project:'Power Bi [Seroza]',period:'15/jan/2021 - 15/dor/2021',percentage:'100%',editclass:'far fa-edit'},
];

@Component({
  selector: 'app-allocation-box',
  templateUrl: './allocation-box.component.html',
  styleUrls: ['./allocation-box.component.css']
})
export class AllocationBoxComponent implements OnInit {

  teams:any;
  skills:any;
  tabledatas:any;
  arquitects:any;
  clients:any;
  projects:any;
  statuss:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.teams = Teams.filter(Teams => Teams);
    this.skills = Skills.filter(Skills => Skills);
    this.tabledatas = TableDatas.filter(TableDatas => TableDatas);
    this.arquitects = Arquitects.filter(Arquitects => Arquitects);
    this.clients = Clients.filter(Clients => Clients);
    this.projects = Projects.filter(Projects => Projects);
    this.statuss = Statuss.filter(Statuss => Statuss);
  }
  allocationModal(){
    this.dialog.open(AllocationModalComponent);
  }

}
