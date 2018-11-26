import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegisterbabyComponent } from './home/register/registerbaby/registerbaby.component';
import { RegistersitterComponent } from './home/register/registersitter/registersitter.component';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { HomeComponent } from './home/home.component';
import { PortalComponent } from './portal/portal.component';
import { FindsitterComponent } from './portal/findsitter/findsitter.component';
import { FindbabyComponent } from './portal/findbaby/findbaby.component';
import { RegisterComponent } from './home/register/register.component';
import { ContactComponent } from './home/contact/contact.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { DisplaysitterComponent } from './portal/displaysitter/displaysitter.component';
// import { DisplaysitterComponent } from './displaysitter/displaysitter.component';
// import { DisplaysitterComponent } from './portal/displaysitter.component';
import { NgRedux, DevToolsExtension, NgReduxModule } from '@angular-redux/store';
import { IAppState } from './store';
import { NgReduxRouter, NgReduxRouterModule } from '@angular-redux/router';

import { rootReducer } from './store';
import { ManageAccountComponent } from './portal/manage-account/manage-account.component';
import { AdminComponent } from './admin/admin.component';
import { EditSitterComponent } from './admin/edit-sitter/edit-sitter.component'; // Added this to get the root reducer

import { HttpClientModule } from '@angular/common/http';
import { FindparentComponent } from './portal/findparent/findparent.component';
import { ParentDetailsComponent } from './portal/findparent/parent-details/parent-details.component';
import { EditKidComponent } from './portal/findparent/parent-details/edit-kid/edit-kid.component';
import { RegisterparentComponent } from './home/register/registerparent/registerparent.component';
import { CreateKidComponent } from './portal/findparent/parent-details/create-kid/create-kid.component'; //FIX

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterbabyComponent,
    RegistersitterComponent,
    HomeComponent,
    PortalComponent,
    FindsitterComponent,
    FindbabyComponent,
    RegisterComponent,
    ContactComponent,
    PagenotfoundComponent,
    DisplaysitterComponent,
    ManageAccountComponent,
    AdminComponent,
    EditSitterComponent,
    FindparentComponent,
    ParentDetailsComponent,
    EditKidComponent,
    RegisterparentComponent,
    CreateKidComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatInputModule,
    MatButtonModule,
    MatSelectModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatCardModule,
    NgReduxModule, NgReduxRouterModule.forRoot(),
    MatProgressSpinnerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 

  // Sets up redux in our application.
  constructor(private ngRedux: NgRedux<IAppState>,
    private devTool: DevToolsExtension,
    private ngReduxRouter: NgReduxRouter,) {
   
    this.ngRedux.configureStore(
      rootReducer, {});
 
      ngReduxRouter.initialize(/* args */);   
  }
}
