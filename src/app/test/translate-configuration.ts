import { NgModule } from '@angular/core';
import { getTestBed } from '@angular/core/testing';
import { TranslateLoader, TranslateModule, TranslateService } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

/* eslint-disable */
/**
 * Fichier de traduction
 */
const translations: any = {
  buildings: {
    title: 'Patient',
  },
};

/**
 * Mock du loader pour le module de traduction
 */
class FakeLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of(translations);
  }
}

@NgModule({
  exports: [TranslateModule],
  imports: [
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useClass: FakeLoader,
      },
    }),
  ],
})
export class TranslateTestingModule {}

/**
 * Set de la langue
 *
 * @returns  traduction des key -> text des traduction
 */
export function setTranslateLang(lang: string): any {
  // Insérer la langue
  const injector = getTestBed();
  const translate = injector.inject(TranslateService);
  translate.use(lang);

  return translations;
}

export class TranslateConfiguration {}
/* eslint-enable */
