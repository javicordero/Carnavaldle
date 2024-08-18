import { createAction, props } from '@ngrx/store';
import { MatchResults } from '../models/match-result.class';

export const setIsMatchStarted = createAction(
  '[Match] setIsMatchStarted',
  props<{ isMatchStarted: boolean }>()
);

export const setMatchResults = createAction(
  '[Match] setMatchResults',
  props<{ matchResults: MatchResults }>()
);
