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

  //injecting the TeamList service in the app
  constructor(private teams: TeamlistService){

  }

  ngOnInit() {
    //subscribing to the service method to get data form the service
    this.teams.getTeams().subscribe(data=>{
      console.log(data);
      //storing team data in an object
      this.teamData=data["results"]["data"]["team"];
      this.newteamData=this.teamData;
      console.log(this.teamData);
      //storing the column data in an object
      this.columns=data["results"]["columns"];
      console.log(this.columns);
      //getting just the keys (key:value) from the column object
      this.values = Object.keys(this.columns);
      console.log(this.values);
    })
  }

  //method to switch display modes between grid and list
  onDisplayModeChange(mode: number): void {
    this.displayMode = mode;
}

//method to sort data ascending according to the column names
sort_asc(columns){
  console.log(columns);
  this.newteamData=this.teamData.sort((a,b)=>{
    if(a[columns]>b[columns]) return 1
    else if(a[columns]===b[columns]) return 0
    else return -1;
  });
}
//method to sort data descending according to the column names
sort_desc(columns){
  console.log(columns);
  this.newteamData=this.teamData.sort((a,b)=>{
    if(a[columns]<b[columns]) return 1
    else if(a[columns]===b[columns]) return 0
    else return -1;
  });
}
}
