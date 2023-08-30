import { ModuleWithProviders, NgModule } from '@angular/core';
import { GLOBALS } from './globals';
import { Options } from 'sortablejs';
import { NgxSortable2Directive } from './ngx-sortable2.directive';

@NgModule({
  declarations: [NgxSortable2Directive],
  exports: [NgxSortable2Directive],
})
export class NgxSortable2Module {
  public static forRoot(
    globalOptions: Options
  ): ModuleWithProviders<NgxSortable2Module> {
    return {
      ngModule: NgxSortable2Module,
      providers: [{ provide: GLOBALS, useValue: globalOptions }],
    };
  }
}
