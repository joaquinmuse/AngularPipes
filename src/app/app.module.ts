import { NgModule ,LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import localUY from "@angular/common/locales/es-UY";
import localFR from "@angular/common/locales/fr";
import { AppComponent } from './app.component';
import { CapitalizadoPipe } from './pipes/capitalizado.pipe';
import { DomseguroPipe } from './pipes/domseguro.pipe';
import { PasswordPipe } from './pipes/password.pipe';


registerLocaleData(localUY);
registerLocaleData(localFR);
@NgModule({
  declarations: [
    AppComponent,
    CapitalizadoPipe,
    DomseguroPipe,
    PasswordPipe
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    {
      provide:LOCALE_ID,
      useValue:'es-UY'
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
