import {RouterModule, Routes} from '@angular/router';
import {TopicComponent} from './component/topic/topic.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';
import {LoginComponent} from './component/login/login.component';
import {HomeComponent} from './component/home/home.component';
import {SignupComponent} from './component/signup/signup.component';

const appRoutes: Routes = [
  {path: '', 'redirectTo': '/home/login', 'pathMatch': 'full'},
  {
    path: 'home', component: HomeComponent,
    children: [
      {path: 'login', component: LoginComponent},
      {path: 'signup', component: SignupComponent},
      {path: 'topics', component: TopicComponent}
    ]
  },

  {path: '**', component: PagenotfoundComponent}
];
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
