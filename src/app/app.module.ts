import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './containers/app-root/app.component';
import {SimpleService} from './services/simple/simple.service';
import {SimpleWithMocksService} from './services/simple-with-mocks/simple-with-mocks.service';
import { SimpleButtonComponent } from './components/simple-button/simple-button.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleButtonComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [
    SimpleService,
    SimpleWithMocksService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
