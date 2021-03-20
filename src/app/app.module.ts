import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {registerLocaleData} from '@angular/common';
import localeUk from '@angular/common/locales/uk';


import {CardComponent} from './card/card.component';
import {AppComponent} from './app.component';
import {FormComponent} from './form/form.component';

registerLocaleData(localeUk, 'uk');

@NgModule({
  declarations: [
    AppComponent,
    CardComponent,
    FormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
