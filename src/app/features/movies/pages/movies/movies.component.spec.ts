import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateTestingModule} from "../../../../test/translate-configuration";

describe('MoviesComponent', () => {
  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ MoviesComponent, TranslateTestingModule ]
    })
      .compileComponents();

    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
