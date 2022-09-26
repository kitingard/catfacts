import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { CatFactsComponent } from './components/cat-facts/cat-facts.component';
import { CatPicturesComponent } from './components/cat-pictures/cat-pictures.component';
import { GridComponent } from './components/grid/grid.component';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';
import { CatFactsEffects } from './store/effects';
import { EffectsModule } from '@ngrx/effects';
import { reducer } from './store/reducers';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CatFactsComponent,
    CatPicturesComponent,
    GridComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    EffectsModule.forRoot([CatFactsEffects]),
    StoreModule.forRoot({ catFactArray: reducer }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
