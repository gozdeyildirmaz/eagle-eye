import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from "@angular/common/http";
import {ActivatedRoute} from "@angular/router";
import {TokenService} from "./token.service";

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
  // .set('Access-Control-Allow-Origin', 'http://localhost:4200')
  //     .set('Access-Control-Allow-Credentials', 'true')
    // headers.set('Authorization',   `Basic ${this.secret}`)
    //   .set('Authorization', 'Basic ' + btoa(this.api_key  + ':' + this.secret ))
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
    // return this.http.get<any>(url, options).pipe(map(res => res.response));
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

      // .set('Authorization', 'Basic ' + btoa(this.api_key  + ':' + this.secret ))
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
    // return this.http.get<any>(url, options).pipe(map(res => res.response));
  }

  getCameraLocation(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId + '/location';

    const headers = new HttpHeaders()

    // .set('Authorization', 'Basic ' + btoa(this.api_key  + ':' + this.secret ))
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
    // return this.http.get<any>(url, options).pipe(map(res => res.response));
  }

  getCameraStatus(cameraId:any) {

    const url = 'http://rest.cameramanager.com/rest/v2.4/cameras/' + cameraId + '/status';

    const headers = new HttpHeaders()

    // .set('Authorization', 'Basic ' + btoa(this.api_key  + ':' + this.secret ))
    const options = {
      headers,
      withCredentials: true
    };
    return this.http.get<any>(url, options);
    // return this.http.get<any>(url, options).pipe(map(res => res.response));
  }


}
