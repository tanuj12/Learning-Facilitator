import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { AngularMaterialModule } from './angular-material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatCardModule, MatExpansionModule } from '@angular/material';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { NotesComponent } from './components/notes/notes.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { HttpClientModule } from '@angular/common/http';
import { ServicesService } from './services.service';
import { MainPageComponent } from './components/main-page/main-page.component';

@NgModule({
  declarations: [
    AppComponent,
    LogInComponent,
    RegisterComponent,
    HomePageComponent,
    QuestionAnswersComponent,
    NotesComponent,
    PasswordResetComponent,
    MainPageComponent
  ],
  imports: [
    MatExpansionModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    FlexLayoutModule,
    FormsModule,
    ReactiveFormsModule,
    MatCardModule,
    HttpClientModule
  ],
  providers: [ServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
