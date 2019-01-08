import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './home/login/login.component';
import { RegistersitterComponent } from './home/register/registersitter/registersitter.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
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
import { CreateKidComponent } from './portal/findparent/create-kid/create-kid.component'; //FIX

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import {MatToolbarModule} from '@angular/material/toolbar';
import { FilterSitters, GenderFilter, ChildRecordFilter, CriminalRecordFilter } from './portal/findsitter/sitters.filter';
import { ChildCountFilter, FilterParents } from './portal/findparent/parents.filter';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegistersitterComponent,
    HomeComponent,
    PortalComponent,
    FindsitterComponent,
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
    CreateKidComponent,
    FilterSitters,
    GenderFilter,
    CriminalRecordFilter,
    ChildRecordFilter,
    ChildCountFilter,
    FilterParents
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
    MatProgressSpinnerModule,
    MatToolbarModule,
    FormsModule
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
