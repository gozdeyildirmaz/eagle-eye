import {Component, OnInit} from '@angular/core';
import {CameraService} from "../../services/camera.service";
import {AuthService} from "../../../../services/auth.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-camera-list',
  templateUrl: './camera-list.component.html',
  styleUrls: ['./camera-list.component.scss']
})
export class CameraListComponent implements OnInit {
  cameraList: any;

  constructor(private cameraService: CameraService, private auth: AuthService, private router: Router, private route: ActivatedRoute) {
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





}
