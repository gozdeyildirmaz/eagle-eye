import {Component, OnInit} from '@angular/core';
import {CameraService} from "../../services/camera.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Observable} from "rxjs";

import {select, Store} from "@ngrx/store";
import {AppState} from "../../state-management/state";
import {getList} from "../../state-management/actions/camera-list.action";
import {selectFeatureCameras} from "../../state-management/selectors";


@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {
  cameraList: any;
  list$;

  constructor(private cameraService: CameraService, private auth: AuthService, private router: Router, private route: ActivatedRoute,private store: Store<AppState>) {

    // this.list$ = this.store.select(state => state.cameras)
   this.store
      .pipe(
        select(selectFeatureCameras)
      ).subscribe(res =>{
        console.log(res)
        this.cameraList=res;
      });

  }

  ngOnInit(): void {
    if(!this.cameraList || !this.cameraList.length)
    this.store.dispatch({ type: '[Camera Component] List' });
  }

  getCamera() {
    this.cameraService.getCameras().subscribe((res: any) => {
      this.cameraList = res;
    })
  }





}
