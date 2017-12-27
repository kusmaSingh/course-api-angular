
import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../comman/constant';
import {TopicModel} from '../model/topic.model';

@Injectable()
export class TopicService  extends BaseService{


  constructor(private http: HttpClient ) {
    super();
  }
/*------------------------------TOPIC Functions--------------------------------------------*/

 public getAllCourseService(): Observable<any>{
    return this.http.get(Constants.WEB_URL+"topics");
 }

 public addTopic(topic:TopicModel): Observable<any> {
   const headers = new HttpHeaders();
   headers.set('Content-Type','application/json;');
   return this.http.post(Constants.WEB_URL+"topics", topic,{ headers: headers, withCredentials:true , responseType: 'text'});
 }

 public removeTopic(id:string){
   const headers = new HttpHeaders();
   headers.set('Content-Type','application/json;');
   return this.http.delete(Constants.WEB_URL+"topics/remove/"+id , { headers: headers, withCredentials:true , responseType: 'text'});
 }

 public updateTopic(topic:TopicModel,id:string){
   const headers = new HttpHeaders();
   headers.set('Content-Type','application/json;');
   return this.http.post(Constants.WEB_URL+"topics/"+id , topic ,{ headers: headers, withCredentials:true , responseType: 'text'});
 }
public getTopicById( id:string){
  const headers = new HttpHeaders();
  headers.set('Content-Type','application/json;');
  return this.http.get(Constants.WEB_URL+"topics/"+id , { headers: headers, withCredentials:true , responseType: 'text'});
}

  /*------------------------------COURSE Functions--------------------------------------------*/

  public getAllCourses(){
    return this.http.get(Constants.WEB_URL+"topics/courses")
  }


  public getAllCourseByTopicId(topicId:string, courseId:string): Observable <any>{
  return this.http.get(Constants.WEB_URL+"topics/"+topicId+"/course/"+courseId);

  }
}
