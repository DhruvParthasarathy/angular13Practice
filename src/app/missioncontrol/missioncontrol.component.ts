import { Component, OnInit } from '@angular/core';

import { MissionService } from '../mission.service';
@Component({
  selector: 'app-mission-control',
  templateUrl: './missioncontrol.component.html',
  styleUrls: ['./missioncontrol.component.css'],
  providers: [MissionService]
})
export class MissioncontrolComponent implements OnInit {

  astronauts:string[] = ['Lovell', 'Swigert', 'Haise'];
  history:string[] = [];
  missions:string[] = ['Fly to the moon!', 'Fly to Mars!', 'Fly to vegas!'];
  nextMission:number=0;

  constructor(private missionService: MissionService) { 
    missionService.missionConfirmed$.subscribe(
      astranaut => this.history.push(`${astranaut} confirmed the mission`)
    );
   }

   announce() {
     const mission = this.missions[this.nextMission++];
     this.missionService.announceMission(mission);
     this.history.push(`Mission "${mission}" announced`);
     if( this.nextMission >= this.missions.length) {this.nextMission=0;}
   }

   clearLogs() {
     this.history=[];
     this.missionService.announceMission('<no mission announced>');
   }

  ngOnInit(): void {
  }

}
