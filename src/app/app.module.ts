import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {routing} from './app.routing';
import {FormsModule, ReactiveFormsModule, FormControlDirective, FormGroupDirective } from '@angular/forms';


import { AppComponent } from './app.component';
import { TopicComponent } from './component/topic/topic.component';
import { CourseComponent } from './component/course/course.component';
import { PagenotfoundComponent } from './component/pagenotfound/pagenotfound.component';
import {TopicService} from './services/topic.service';
import {HttpClientModule,HttpResponse} from '@angular/common/http';
import {PagerService} from './services/comman-service/page.service';
import { SignupComponent } from './component/signup/signup.component';
import { LoginComponent } from './component/login/login.component';
import { HomeComponent } from './component/home/home.component';
import {LoginService} from './services/login.service';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { MainComponent } from './component/main/main.component';
import {UserService} from './services/user.service';
import {CommonService} from './services/comman-service/common.service';


@NgModule({
  declarations: [
    AppComponent,
    TopicComponent,
    CourseComponent,
    PagenotfoundComponent,
    SignupComponent,
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    MainComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    routing,
  ],
  providers: [TopicService,PagerService ,LoginService,FormControlDirective,
    FormGroupDirective,UserService, CommonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
