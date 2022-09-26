import { Component, Input } from '@angular/core';
import { ICatFact } from 'src/app/types/cat-fact';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.scss'],
})
export class GridComponent {
  @Input() catFactArray!: ICatFact[] | null;
}
