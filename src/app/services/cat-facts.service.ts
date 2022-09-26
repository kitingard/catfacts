import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { ICatFact } from '../types/cat-fact';
import { PostService } from './post.service';

@Injectable({
  providedIn: 'root',
})
export class CatFactsService {
  catFactArray$!: Observable<ICatFact[]>;

  catFactsRoute = 'https://meowfacts.herokuapp.com?count=6';

  constructor(private postService: PostService) {}

  getCatFacts() {
    return (this.catFactArray$ = this.postService
      .getPosts(this.catFactsRoute)
      .pipe(
        map((obj: any) =>
          obj.data.map((element: string, index: number, array: [string]) => {
            return { catId: index + array.length, catFact: element };
          })
        )
      ));
  }
}
