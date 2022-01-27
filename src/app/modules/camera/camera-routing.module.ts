import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraListComponent} from "./components/camera-list/camera-list.component";
import {CameraDetailComponent} from "./components/camera-detail/camera-detail.component";

const routes: Routes = [
  { path: 'camera-list', component: CameraListComponent },
  { path: 'camera-detail/:id', component: CameraDetailComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CameraRoutingModule { }
