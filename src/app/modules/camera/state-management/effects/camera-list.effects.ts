import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { CameraService } from '../../services/camera.service';

@Injectable()
export class CameraEffects {

  loadMovies$ = createEffect(() => {
    return this.actions$.pipe(
      ofType('[Camera Component] List'),
      mergeMap(() => this.cameraService.getCameras()
        .pipe(
          map(cameras =>  ({ type: '[Camera Component] Cameras Loaded Success', cameras: cameras })),
          catchError(() => EMPTY)
        ))
    )
    }
  );

  constructor(
    private actions$: Actions,
    private cameraService: CameraService
  ) {}
}
