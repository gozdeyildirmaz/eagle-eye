import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {CameraService} from "../../services/camera.service";
import {select} from "@ngrx/store";
import {selectFeatureCameras} from "../../state-management/selectors";
import {Store} from "@ngrx/store";
import {AppState} from "../../state-management/state";

@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss']
})
export class CameraDetailComponent implements OnInit, OnDestroy {
  cameraId: any;
  cameraInfo: any
  cameraBrand: any
  cameraLocation: any
  cameraStatus: any
  subcription: any[] = []
  cameraList;

  constructor(private activatedRoute: ActivatedRoute, private cameraService: CameraService, private store: Store<AppState>) {
    this.store
      .pipe(
        select(selectFeatureCameras)
      ).subscribe(res => {
      console.log(res)
      this.cameraList = res;
    });
  }

  ngOnInit(): void {
    this.cameraId = this.activatedRoute.snapshot.paramMap.get('id')
    this.getCameraDetail();
  }

  getCameraDetail() {
    if (this.cameraList && this.cameraList.length) {
      let cam  = this.cameraList.filter(c => c.cameraId == this.cameraId)[0]
      this.cameraInfo = {name: cam.name +' (Data are retrived from store by NgRx)', ethMacAddress: cam.ethMacAddress};

    }
    else{
      this.subcription.push( this.cameraService.getCameraInfo(this.cameraId).subscribe(res => {
        this.cameraInfo = res;
      }))
    }

    this.cameraService.getCameraBrand(this.cameraId).subscribe(res => {
      this.cameraBrand = res;
    })
    this.cameraService.getCameraLocation(this.cameraId).subscribe(res => {
      this.cameraLocation = res;
    })
    this.cameraService.getCameraStatus(this.cameraId).subscribe(res => {
      this.cameraStatus = res;
    })
  }

  ngOnDestroy(): void {
    this.subcription.forEach(s => {
      s.unsubscribe()
    })
  }

}
