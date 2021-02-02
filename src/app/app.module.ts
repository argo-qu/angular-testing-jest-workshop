import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './components/app-root/app.component';
import {SimpleService} from './services/simple/simple.service';
import {SimpleWithMocksService} from './services/simple-with-mocks/simple-with-mocks.service';

@NgModule({
  declarations: [
    AppComponent,
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
