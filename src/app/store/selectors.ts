import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppState } from './reducer';

export const getAppState = createFeatureSelector<AppState>('App');

// Match
export const selectIsMatchStarted = createSelector(
  getAppState,
  (state: AppState) => state.isMatchStarted
);

export const selectMatchResults = createSelector(
  getAppState,
  (state: AppState) => state.matchResults
);
