import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { GetCatFacts } from 'src/app/store/actions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent {
  constructor(private store: Store) {}

  getCatFacts() {
    this.store.dispatch(GetCatFacts());
  }
}
