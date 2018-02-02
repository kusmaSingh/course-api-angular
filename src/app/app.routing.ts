import {RouterModule, Routes} from '@angular/router';
import {TopicComponent} from './component/topic/topic.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {SignupComponent} from './component/signup/signup.component';
import {MainComponent} from './component/main/main.component';
import {CourseComponent} from './component/course/course.component';

const appRoutes: Routes = [
  {path: '', 'redirectTo': '/home/main', 'pathMatch': 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'main', component: MainComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'topics', component: TopicComponent},
      {path: 'courses', component: CourseComponent},
    ]
  },

  {path: '**', component: PagenotfoundComponent}
];
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
