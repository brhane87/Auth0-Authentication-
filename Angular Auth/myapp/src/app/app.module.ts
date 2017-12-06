import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { PublicDealsComponent } from './public-deals/public-deals.component';
import { PrivateDealsComponent } from './private-deals/private-deals.component';
import { CallbackComponent } from './callback.component';

import { AppRoutingModule } from './app-routing/app-routing.module'
import { DealService } from './deal.service';
import { AuthService } from './auth/auth.service';



@NgModule({
  declarations: [
    AppComponent,
    PublicDealsComponent,
    PrivateDealsComponent,
    CallbackComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [DealService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule {


}
