import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegisterComponent } from './home/register/register.component';
import { RegisterbabyComponent } from './home/register/registerbaby/registerbaby.component';
import { RegistersitterComponent } from './home/register/registersitter/registersitter.component';
import { PortalComponent } from './portal/portal.component';
import { FindbabyComponent } from './portal/findbaby/findbaby.component';
import { FindsitterComponent } from './portal/findsitter/findsitter.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';

// Insert routes here
const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},

  // Subrouting children
  {path: 'home', component: HomeComponent, children:
    [
      {path: 'login', component: LoginComponent},
      {path: 'contact', component: ContactComponent},
      {path: 'register', component: RegisterComponent, children:
        [
          {path: 'registerbaby', component: RegisterbabyComponent},
          {path: 'registersitter', component: RegistersitterComponent}
        ]
      }
    ]
  },

  // Subrouting children. Has AuthGuard
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children:
    [
      {path: 'findbaby', component: FindbabyComponent},
      {path: 'findsitter', component: FindsitterComponent}
      // {path: 'findsitter/:id', component: EditsitterComponent}
    ]
  },

  // Always put this last to avoid errors
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
