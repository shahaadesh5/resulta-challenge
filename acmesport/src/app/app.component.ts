import { Component, OnInit } from '@angular/core';
import { TeamlistService } from './teamlist.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'acmesport';
  displayMode=1;
  teamData:any;
  newteamData: any;
  columns:any;
  values;
  teamName;
  constructor(private teams: TeamlistService){

  }

  ngOnInit() {
    this.teams.getTeams().subscribe(data=>{
      console.log(data);
      this.teamData=data["results"]["data"]["team"];
      this.newteamData=this.teamData;
      console.log(this.teamData);
      this.columns=data["results"]["columns"];
      console.log(this.columns);
      this.values = Object.keys(this.columns);
      console.log(this.values);
    })
  }

  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
}
sort_asc(columns){
  console.log(columns);
  this.newteamData=this.teamData.sort((a,b)=>{
    if(a[columns]>b[columns]) return 1
    else if(a[columns]===b[columns]) return 0
    else return -1;
  });
}
sort_desc(columns){
  console.log(columns);
  this.newteamData=this.teamData.sort((a,b)=>{
    if(a[columns]<b[columns]) return 1
    else if(a[columns]===b[columns]) return 0
    else return -1;
  });
}
}
