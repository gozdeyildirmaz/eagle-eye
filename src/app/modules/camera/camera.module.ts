import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {CameraRoutingModule} from './camera-routing.module';
import {CameraListComponent} from './components/camera-list/camera-list.component';
import {CameraDetailComponent} from './components/camera-detail/camera-detail.component';
import {EffectsModule, USER_PROVIDED_EFFECTS} from "@ngrx/effects";
import {CameraEffects} from "./state-management/effects/camera-list.effects";
import {StoreModule} from "@ngrx/store";
import {CameraReducer} from "./state-management/reducers/camera-list.reducer";




@NgModule({
  declarations: [
    CameraListComponent,
    CameraDetailComponent
  ],
  imports: [
    CommonModule,
    CameraRoutingModule,
    StoreModule.forFeature('cameras', CameraReducer),
    EffectsModule.forFeature([CameraEffects])
  ]
})
export class CameraModule {
}
