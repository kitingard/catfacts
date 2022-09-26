import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { ICatFact } from 'src/app/types/cat-fact';
import * as fromRoot from 'src/app/store/selectors';

@Component({
  selector: 'app-cat-facts',
  templateUrl: './cat-facts.component.html',
  styleUrls: ['./cat-facts.component.scss'],
})
export class CatFactsComponent {
  catFactArray$: Observable<ICatFact[] | null> = this.store.select(
    fromRoot.getcatFactArray
  );

  constructor(private store: Store) {}
}
