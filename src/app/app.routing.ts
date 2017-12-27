import {RouterModule, Routes} from '@angular/router';
import {TopicComponent} from './component/topic/topic.component';
import {PagenotfoundComponent} from './component/pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  {'path': '', 'redirectTo': '/home', 'pathMatch': 'full'},
  { path: 'home', component: TopicComponent },

  { path: '**', component: PagenotfoundComponent }
];
export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
