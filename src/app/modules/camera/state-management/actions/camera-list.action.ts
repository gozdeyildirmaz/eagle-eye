import {createAction, props} from '@ngrx/store';

export const getList = createAction('[Camera Component] List');
export const getListSucces = createAction('[Camera Component] Cameras Loaded Success',
  props<{ cameras: any[] }>());
