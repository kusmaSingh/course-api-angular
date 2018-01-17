import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';


import { AppComponent } from './app.component';
import { TopicComponent } from './component/topic/topic.component';
import { CourseComponent } from './component/course/course.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import {TopicService} from './services/topic.service';
import {FormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import {PagerService} from './services/comman-service/page.service';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    CourseComponent,
    PagenotfoundComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    routing,
  ],
  providers: [TopicService,PagerService ,],
  bootstrap: [AppComponent]
})
export class AppModule { }
