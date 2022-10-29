import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditEducacionComponent } from './components/educacion/edit-educacion.component';
import { NewEducacionComponent } from './components/educacion/new-educacion.component';
import { EditExperienciaComponent } from './components/experiencia/edit-experiencia.component';
import { NewExperienciaComponent } from './components/experiencia/new-experiencia.component';
import { EditSkillComponent } from './components/hardandsoftskills/edit-skill.component';
import { NewSkillComponent } from './components/hardandsoftskills/new-skill.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'nuevaExp', component: NewExperienciaComponent },
  { path: 'editExp/:id', component: EditExperienciaComponent },
  { path: 'nuevaEdu', component: NewEducacionComponent },
  { path: 'editEdu/:id', component: EditEducacionComponent },
  { path: 'nuevaSkill', component: NewSkillComponent },
  { path: 'editSkill/:id', component: EditSkillComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
