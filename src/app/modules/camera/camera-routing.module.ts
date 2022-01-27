import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CameraListComponent} from "./components/camera-list/camera-list.component";
import {CameraDetailComponent} from "./components/camera-detail/camera-detail.component";
import {PermissionGuard} from "../../shared/permission-guard";

const routes: Routes = [
  // {path: '', redirectTo:'list', pathMatch: 'full'},
  { path: '', component: CameraListComponent,canActivate: [PermissionGuard], },
  { path: 'cameradetail/:id', component: CameraDetailComponent,canActivate: [PermissionGuard], }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [PermissionGuard]})
export class CameraRoutingModule { }
