import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "../../../services/token.service";

@Injectable({
  providedIn: 'root'
})
export class CameraService {
  username='onlinedemo@cameramanager.com'
  password='demo1234'
  api_key='dev_test'
  secret='3H1Bf6mCctIgpCuzvrnyekf3VhAUEnKJ'

  constructor(private http: HttpClient, private activatedRoute: ActivatedRoute, private tokenService: TokenService) { }


  getCameras() {
    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras';

    const headers = new HttpHeaders()
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
  }

  getCameraInfo(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId ;

    const headers = new HttpHeaders()
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
  }

  getCameraBrand(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId + '/deviceInfo';

    const headers = new HttpHeaders()

    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
  }

  getCameraLocation(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId + '/location';

    const headers = new HttpHeaders()

    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
  }

  getCameraStatus(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId + '/status';

    const headers = new HttpHeaders()

    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
  }


}
