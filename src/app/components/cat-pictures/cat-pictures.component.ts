import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { CatPictureService } from 'src/app/services/cat-picture.service';
import { ICatPicture } from 'src/app/types/cat-picture';

@Component({
  selector: 'app-cat-pictures',
  templateUrl: './cat-pictures.component.html',
  styleUrls: ['./cat-pictures.component.scss'],
})
export class CatPicturesComponent {
  randomCatPhoto$: Observable<ICatPicture> =
    this.catPictureService.getCatPicture();

  constructor(private catPictureService: CatPictureService) {}

  getCatPicture() {
    this.randomCatPhoto$ = this.catPictureService.getCatPicture();
  }
}
