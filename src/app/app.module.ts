import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StepsTemplateComponent } from './components/step-template/steps-template.component';
import { StepsComponent } from './components/steps-header/steps.component';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IntroductionComponent } from './pages/introduction/introduction.component';
import { PersonalInformationComponent } from './pages/personal-information/personal-information.component';
import { UserConsentComponent } from './pages/user-consent/user-consent.component';
import { StepsFooterComponent } from './components/steps-footer/steps-footer.component';
import { FormPageComponent } from './pages/form-page/form-page.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    StepsTemplateComponent,
    StepsComponent,
    UserPageComponent,
    IntroductionComponent,
    PersonalInformationComponent,
    UserConsentComponent,
    StepsFooterComponent,
    FormPageComponent
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
