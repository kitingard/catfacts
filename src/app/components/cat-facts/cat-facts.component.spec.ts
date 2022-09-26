import { NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { provideMockStore, MockStore } from '@ngrx/store/testing';
import { ICatFactsState } from 'src/app/types/cat-facts-state';
import { GridComponent } from 'src/app/components/grid/grid.component';
import { CatFactsComponent } from 'src/app/components/cat-facts/cat-facts.component';

describe('CatFactsComponent', () => {
  let store: MockStore<ICatFactsState>;
  const initialState = { catFactArray: null };
  let component: CatFactsComponent;
  let fixture: ComponentFixture<CatFactsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CatFactsComponent, GridComponent],
      providers: [provideMockStore({ initialState })],
      schemas: [NO_ERRORS_SCHEMA],
    }).compileComponents();

    fixture = TestBed.createComponent(CatFactsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
