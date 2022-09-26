import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, switchMap } from 'rxjs';
import { CatFactsService } from '../services/cat-facts.service';
import { ICatFact } from '../types/cat-fact';
import { CatFactsActionsType, GetCatFactsSuccess } from './actions';

@Injectable()
export class CatFactsEffects {
  constructor(
    private actions$: Actions,
    private catFactsService: CatFactsService
  ) {}

  getCatFacts$ = createEffect(() =>
    this.actions$.pipe(
      ofType(CatFactsActionsType.GetCatFacts),
      switchMap(() =>
        this.catFactsService
          .getCatFacts()
          .pipe(
            map((catFactArray: ICatFact[]) =>
              GetCatFactsSuccess({ catFactArray })
            )
          )
      )
    )
  );
}
