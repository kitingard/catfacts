import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { CatPicturesComponent } from './components/cat-pictures/cat-pictures.component';

const routes: Routes = [
  { path: '', component: CatFactsComponent },
  { path: 'pictures', component: CatPicturesComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
