import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { ICatPicture } from '../types/cat-picture';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class CatPictureService {
  randomCatApi = 'https://api.thecatapi.com/v1/images/search';

  constructor(private postService: PostService) {}

  getCatPicture(): Observable<ICatPicture> {
    return this.postService
      .getPosts(this.randomCatApi)
      .pipe(map((array: any) => array[0]));
  }
}
