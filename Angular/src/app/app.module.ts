import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DxListModule } from 'devextreme-angular/ui/list';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DxListModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }
