
import { Injectable } from '@angular/core';
import {BaseService} from './base.service';
import {Observable} from 'rxjs/Observable';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Constants} from '../comman/constant';
import {TopicModel} from '../model/topic.model';
import {CourseModel} from '../model/course.model';

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

 public removeTopic(id:number){
   const headers = new HttpHeaders();
   headers.set('Content-Type','application/json;');
   return this.http.delete(Constants.WEB_URL+"topics/remove/"+id , { headers: headers, withCredentials:true , responseType: 'text'});
 }

 public updateTopic(topic:TopicModel,id:number){
   const headers = new HttpHeaders();
   headers.set('Content-Type','application/json;');
   return this.http.post(Constants.WEB_URL+"topics/"+id , topic ,{ headers: headers, withCredentials:true , responseType: 'text'});
 }
public getTopicById( id:number){
  const headers = new HttpHeaders();
  headers.set('Content-Type','application/json;');
  return this.http.get(Constants.WEB_URL+"topics/"+id , { headers: headers, withCredentials:true , responseType: 'text'});
}

  /*------------------------------COURSE Functions--------------------------------------------*/

  public getAllCourses(){
    return this.http.get(Constants.WEB_URL+"topics/courses")
  }


  public getAllCourseByTopicId(topicId:number, courseId:number): Observable <any>{
  return this.http.get(Constants.WEB_URL+"topics/"+topicId+"/course/"+courseId);

  }

  public addCourse(topicId:number, courseModel:CourseModel):Observable<any>{
    const headers = new HttpHeaders();
    headers.set('Content-Type','application/json;');
    return this.http.post(Constants.WEB_URL+"topics/"+topicId+"/course/"+courseModel.id, courseModel ,{ headers: headers, withCredentials:true , responseType: 'text'});
  }

}
