import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ProjectsModalComponent } from '../components/projects-modal/projects-modal.component';

interface Unit {
  value: string;
  unitName: string;
}

interface Status {
  value: string;
  statusName: string;
}

interface TableData {
  status: string;
  project: string;
  client: string;
  unit: string;
  start: string;
  end: string;
  open: string;
  editclass: string;
}

export const Units: Unit[] = [
  {value: 'unit1', unitName: 'Unit 1'},
  {value: 'unit2', unitName: 'Unit 2'},
  {value: 'unit3', unitName: 'Unit 3'}
];

export const Status: Status[] = [
  {value: 'status1', statusName: 'Finished'},
  {value: 'status2', statusName: 'Inprogress'},
  {value: 'status3', statusName: 'Planned'}
];

export const TableDatas: TableData[] = [
  {status:'Finished', project:'Architects 2021',client:'JBFO',unit:'Unit 1',start:'jan/2020',end:'dez/2021',open:'-',editclass:'far fa-edit'},
  {status:'Inprogress', project:'Architects 2022',client:'JBFO',unit:'Unit 2',start:'jan/2020',end:'dez/2021',open:'-',editclass:'far fa-edit'},
  {status:'Planned', project:'Architects 2021',client:'JBFO',unit:'Unit 3',start:'jan/2020',end:'dez/2021',open:'-',editclass:'far fa-edit'},
  {status:'Finished', project:'Architects 2021',client:'JBFO',unit:'Unit 4',start:'jan/2020',end:'dez/2021',open:'-',editclass:'far fa-edit'},
  {status:'Inprogress', project:'Architects 2021',client:'JBFO',unit:'Unit 5',start:'jan/2020',end:'dez/2021',open:'2',editclass:'far fa-edit'},
];

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  units:any;
  status:any;
  tabledatas:any;

  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.units = Units.filter(Teams => Teams);
    this.status = Status.filter(Skills => Skills);
    this.tabledatas = TableDatas.filter(TableDatas => TableDatas);
  }

  projectsModal(){
    this.dialog.open(ProjectsModalComponent);
  }

}
