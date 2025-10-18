import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { MeComponent } from './components/me/me.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectComponent } from './components/project/project.component';
import { EducationComponent } from './components/education/education.component';
import { ContactComponent } from './components/contact/contact.component';


export const routes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'me', component: MeComponent },
    { path: 'skills', component: SkillsComponent },
    { path: 'projects', component: ProjectComponent },
    { path: 'edu', component: EducationComponent },
    { path: 'contact', component: ContactComponent }
];
