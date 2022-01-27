import {Component, OnInit} from '@angular/core';
import {CameraService} from "../../services/camera.service";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {
  cameraList: any;

  constructor(private cameraService: CameraService, private auth: AuthService) {
  }

  ngOnInit(): void {
    this.getCamera();
  }

  getCamera() {
    this.cameraService.getCameras().subscribe((res: any) => {
      debugger;
      this.cameraList = res;
    })
  }


  getAuthServiceLogin() {
    this.auth.login({}).subscribe((x: any) => {
      debugger;
      console.log(x);
    })
  }

}
