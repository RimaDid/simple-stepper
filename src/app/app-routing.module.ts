import { IntroductionComponent } from './pages/introduction/introduction.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';

import { NgModule, enableProdMode } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { UserConsentComponent } from './pages/user-consent/user-consent.component';


const routes: Routes = [
  {
    path: 'form',
    component: FormPageComponent,
    children: [
      {
        path: '',
        redirectTo: '/intro',
        pathMatch: 'full'
      },
      {
        path: 'intro',
        component: IntroductionComponent
      },
      {
        path: 'personal-info',
        component: PersonalInformationComponent,
        data: {animation: 'PersonalInfoPage'}
      },
      {
        path: 'consent',
        component: UserConsentComponent,
        data: {animation: 'UserConsentPage'}
      },
    ]
  },
  {
    path: 'user/:id',
    component: UserPageComponent
  },
  {
    path: '',
    redirectTo: '/form',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }