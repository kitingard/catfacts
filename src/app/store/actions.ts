import { createAction, props } from '@ngrx/store';
import { ICatFact } from '../types/cat-fact';

export enum CatFactsActionsType {
  GetCatFacts = '[CATFACTS] Get Cat Facts',
  GetCatFactsSuccess = '[CATFACTS] Get Cat Facts Succes',
}

export const GetCatFacts = createAction(CatFactsActionsType.GetCatFacts);

export const GetCatFactsSuccess = createAction(
  CatFactsActionsType.GetCatFactsSuccess,
  props<{ catFactArray: ICatFact[] | null }>()
);
