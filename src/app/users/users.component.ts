import { Component, OnInit } from '@angular/core';
import { UsersModalComponent } from '../components/users-modal/users-modal.component';
import { MatDialog } from '@angular/material/dialog';

interface Profile {
  value: string;
  profileName: string;
}

export const Profiles: Profile[] = [
  {value: 'user1', profileName: 'User 1'},
  {value: 'user2', profileName: 'User 2'},
  {value: 'user3', profileName: 'User 3'}
];


interface TableData {
  name: string;
  login: string;
  profile: string;
  lastaccess: string;
  editclass: string;
}

export const TableDatas: TableData[] = [
  {name:'Marcelo Azevedo', login:'user1@gmail.com',profile:'Admin',lastaccess:'2021-07-14',editclass:'far fa-edit'},
  {name:'Gobriel concenza', login:'user2@gmail.com',profile:'User',lastaccess:'2021-07-16',editclass:'far fa-edit'},
  {name:'Gobriel Matsudo', login:'user3@gmail.com',profile:'Visitor',lastaccess:'2021-07-18',editclass:'far fa-edit'},
  {name:'Gobriel concenza', login:'user4@gmail.com',profile:'Manager',lastaccess:'2021-07-19',editclass:'far fa-edit'},
  {name:'Gobriel Matsudo', login:'user5@gmail.com',profile:'User',lastaccess:'2021-07-25',editclass:'far fa-edit'},
];

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  profiles:any;
  tabledatas:any;
  constructor(public dialog: MatDialog) { }

  ngOnInit() {
    this.profiles = Profiles.filter(Profiles => Profiles);
    this.tabledatas = TableDatas.filter(TableDatas => TableDatas);
  }

  usersModal(){
    this.dialog.open(UsersModalComponent);
  }

}
