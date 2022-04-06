import { Component, Input, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {MissionService} from '../mission.service';

@Component({
  selector: 'app-astronaut',
  templateUrl: './astranaut.component.html',
  styleUrls: ['./astranaut.component.css']
})
export class AstranautComponent implements OnInit {


  @Input() astronaut = '';
  mission = '<no mission announced>';
  confirmed = false;
  announced = false;
  subscription: Subscription;

  constructor(private missionService: MissionService) { 
    this.subscription = missionService.missionAnnounced$.subscribe(
      mission => {
        this.mission=mission;
        if(this.mission === '<no mission announced>'){
          this.announced = false;
        } else {
          this.announced = true;
        }
        
        this.confirmed = false;
      }
    )
  }
  confirm(){
    this.confirmed = true;
    this.missionService.confirmMission(this.astronaut);
  }

  ngOnDestroy() {
    // prevent memory leak when component destroyed
    this.subscription.unsubscribe();
  }
  ngOnInit(): void {
  }

}
