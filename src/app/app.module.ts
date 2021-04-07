import { NgModule ,LOCALE_ID} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { registerLocaleData } from "@angular/common";
import localUY from "@angular/common/locales/es-UY";
import localFR from "@angular/common/locales/fr";
import { AppComponent } from './app.component';


registerLocaleData(localUY);
registerLocaleData(localFR);
@NgModule({
  declarations: [
    AppComponent
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
