import { createReducer, on } from '@ngrx/store';
import * as actions from './actions';
import { MatchResults } from '../models/match-result.class';

export interface AppState {
  isMatchStarted: boolean;
  matchResults: MatchResults;
}

export const initialState: AppState = {
  isMatchStarted: false,
  matchResults: new MatchResults(),
};

export const appReducer = createReducer(
  initialState,
  on(actions.setIsMatchStarted, (state, { isMatchStarted }) => ({
    ...state,
    isMatchStarted,
  })),

  on(actions.setMatchResults, (state, { matchResults }) => ({
    ...state,
    matchResults,
  }))
);
