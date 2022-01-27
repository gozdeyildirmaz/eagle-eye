import {createFeatureSelector, createSelector} from '@ngrx/store';

export const featureKey = 'cameras';
export interface FeatureState {
  cameras: any[];
}

export interface AppState {
  feature: FeatureState;
}

export const selectFeature = createFeatureSelector<FeatureState>(featureKey);

export const selectFeatureCameras = createSelector(
  selectFeature,
  (state: FeatureState) => state.cameras);
