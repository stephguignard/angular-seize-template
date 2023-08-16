import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoviesComponent } from './movies.component';
import {MockBuilder} from "ng-mocks";
import {TranslateTestingModule} from "../../../../test/translate-configuration";
import {CommonModule} from "@angular/common";
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import {SHARED} from "../../../../shared";

describe('MoviesComponent', () => {

  let component: MoviesComponent;
  let fixture: ComponentFixture<MoviesComponent>;

  beforeEach(()=>{
    MockBuilder(MoviesComponent).mock(TranslateService).mock(TranslateModule);
    fixture = TestBed.createComponent(MoviesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  })

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
