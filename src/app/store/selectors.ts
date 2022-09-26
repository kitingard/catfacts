import { createFeatureSelector, createSelector } from '@ngrx/store';
import { ICatFactsState } from '../types/cat-facts-state';

const selectCatFacts = createFeatureSelector<ICatFactsState>('catFactArray');

export const getcatFactArray = createSelector(
  selectCatFacts,
  (state) => state.catFactArray
);
