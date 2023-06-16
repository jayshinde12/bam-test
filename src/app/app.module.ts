import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BbUIModule } from './bb-ui/bb-ui.module';
import { HeaderComponent } from './components/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MakeTransferComponent } from './components/main/make-transfer/make-transfer.component';
import { TransectionListComponent } from './components/main/transection-list/transection-list.component';
import { TransectionHeaderComponent } from './components/main/transection-list/transection-header/transection-header.component';
import { FromAccountComponent } from './components/main/make-transfer/from-account/from-account.component';
import { ToAccountComponent } from './components/main/make-transfer/to-account/to-account.component';
import { TransferHeaderComponent } from './components/main/make-transfer/transfer-header/transfer-header.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { TransferPopupComponent } from './components/main/make-transfer/transfer-popup/transfer-popup.component';
import {MatDialogModule} from '@angular/material/dialog';

const modules = [
  BrowserModule,
  AppRoutingModule,
  BbUIModule,
  HttpClientModule,
  ReactiveFormsModule,
  MatDialogModule
]
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MakeTransferComponent,
    TransectionListComponent,
    TransectionHeaderComponent,
    FromAccountComponent,
    ToAccountComponent,
    TransferHeaderComponent,
    TransferPopupComponent,
  ],
  imports: modules,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
