import { Action, createReducer, on } from '@ngrx/store';
import { ICatFactsState } from '../types/cat-facts-state';
import { GetCatFactsSuccess } from './actions';

export const initialCatFactsState: ICatFactsState = {
  catFactArray: null,
};

const catFactsReducer = createReducer(
  initialCatFactsState,
  on(GetCatFactsSuccess, (state, { catFactArray }) => ({
    ...state,
    catFactArray,
  }))
);

export function reducer(state: ICatFactsState | undefined, action: Action) {
  return catFactsReducer(state, action);
}
