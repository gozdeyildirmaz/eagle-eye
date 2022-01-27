import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CameraRoutingModule } from './camera-routing.module';
import { CameraListComponent } from './components/camera-list/camera-list.component';
import { CameraDetailComponent } from './components/camera-detail/camera-detail.component';


@NgModule({
  declarations: [
    CameraListComponent,
    CameraDetailComponent
  ],
  imports: [
    CommonModule,
    CameraRoutingModule,
  ]
})
export class CameraModule { }
