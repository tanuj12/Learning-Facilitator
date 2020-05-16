import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './components/log-in/log-in.component';
import { RegisterComponent } from './components/register/register.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { QuestionAnswersComponent } from './components/question-answers/question-answers.component';
import { NotesComponent } from './components/notes/notes.component';
import { PasswordResetComponent } from './components/password-reset/password-reset.component';
import { MainPageComponent } from './components/main-page/main-page.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'mainPage' },
  { path: 'mainPage', component: MainPageComponent },
  { path: 'login', component: LogInComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'homePage', component: HomePageComponent },
  { path: 'questionAnswers', component: QuestionAnswersComponent },
  { path: 'notes', component: NotesComponent },
  { path: 'passwordReset', component: PasswordResetComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'mainPage'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
