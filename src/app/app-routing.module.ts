import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './home/login/login.component';
import { ContactComponent } from './home/contact/contact.component';
import { RegisterComponent } from './home/register/register.component';
import { RegistersitterComponent } from './home/register/registersitter/registersitter.component';
import { PortalComponent } from './portal/portal.component';
import { FindsitterComponent } from './portal/findsitter/findsitter.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { AuthGuard } from './auth/auth.guard';
import { AdminComponent } from './admin/admin.component';
import { EditSitterComponent } from './admin/edit-sitter/edit-sitter.component';
import { FindparentComponent } from './portal/findparent/findparent.component';
import { ParentDetailsComponent } from './portal/findparent/parent-details/parent-details.component';
import { EditKidComponent } from './portal/findparent/parent-details/edit-kid/edit-kid.component';
import { RegisterparentComponent } from './home/register/registerparent/registerparent.component';
import { CreateKidComponent } from './portal/findparent/create-kid/create-kid.component';

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
          {path: 'registersitter', component: RegistersitterComponent},
          {path: 'registerparent', component: RegisterparentComponent}
        ]
      }
    ]
  },

  // Subrouting children. Has AuthGuard
  // {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children:
  //   [
  //     {path: 'findbaby', component: FindbabyComponent}, //Disable
  //     {path: 'findsitter', component: FindsitterComponent},
  //     {path: 'findparent', component: FindparentComponent, children: 
  //     [
  //       {path: 'parent-details', component: ParentDetailsComponent},
  //       {path: 'edit-kid', component: EditKidComponent}
  //     ]}
  //     // {path: 'findsitter/:id', component: EditsitterComponent}
  //   ]
  // },

  //NEW
  {path: 'portal', component: PortalComponent, canActivate: [AuthGuard], children:
    [
      {path: 'findsitter', component: FindsitterComponent},
      {path: 'findparent', component: FindparentComponent, children: 
      [
        {path: 'parent-details', component: ParentDetailsComponent},
        {path: 'create-kid', component: CreateKidComponent}
        // {path: 'edit-kid', component: EditKidComponent}
      ]}
      // {path: 'findsitter/:id', component: EditsitterComponent}
    ]
  },

  // {path: 'parent-details', component: ParentDetailsComponent, children: 
  //       [
  //         {path: 'create-kid', component: CreateKidComponent},
  //         {path: 'edit-kid', component: EditKidComponent}
  //       ]
  //     }

  {path: 'admin', component: AdminComponent, canActivate: [AuthGuard], children:
    [
      {path: 'edit-sitter', component: EditSitterComponent}
    ]
  }, //Add admin children

  // Always put this last to avoid errors
  {path: '**', component: PagenotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
