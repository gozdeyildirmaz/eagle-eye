import {Component, OnDestroy, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {map} from "rxjs/operators";
import {CameraService} from "../../services/camera.service";

@Component({
  selector: 'app-camera-detail',
  templateUrl: './camera-detail.component.html',
  styleUrls: ['./camera-detail.component.scss']
})
export class CameraDetailComponent implements OnInit , OnDestroy {
  cameraId: any;
  cameraInfo: any
  cameraBrand: any
  cameraLocation: any
  cameraStatus: any
  subcription:any[] = []

  constructor(private activatedRoute: ActivatedRoute, private cameraService: CameraService) {
  }

  ngOnInit(): void {
    this.cameraId = this.activatedRoute.snapshot.paramMap.get('id')
    this.getCameraDetail();
    debugger;
  }

  getCameraDetail() {
   this.subcription.push( this.cameraService.getCameraInfo(this.cameraId).subscribe(res => {
      this.cameraInfo = res;
    }))
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
    this.subcription.forEach(s =>{
      s.unsubscribe()
    })
  }

}
