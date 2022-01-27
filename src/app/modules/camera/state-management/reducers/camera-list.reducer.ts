import {createFeature, createReducer, on} from '@ngrx/store';
import * as ListActions from '../actions/camera-list.action';

interface State {
  cameras: any[]; //todo model ekle
}


const initialState: State = {
  cameras: []
};
/*
export const cameraFeature = createFeature({
  name: 'lists',
  reducer: createReducer(
    initialState,
    // on(ListActions.getList, (state) => ({
    //   ...state
    // })),
    on(ListActions.getListSucces, (state, { cameras }) => ({
      ...state,
      cameras
    }))
  ),
});

export const {
  name, // feature name
  reducer // feature reducer
  // selectBooksState, // feature selector
  // selectBooks, // selector for `books` property
} = cameraFeature;
*/


const cameraReducer = createReducer(
  initialState,
  on(ListActions.getList, state => ({
    ...state
  })),
  on(ListActions.getListSucces, (state, { cameras }) => {
    return {
      ...state,
      cameras: cameras

    };
  })

);

export function CameraReducer(
  state: State | undefined,
  action: any
) {
  return cameraReducer(state, action);
}
