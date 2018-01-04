import {Component, OnInit} from '@angular/core';
import {Constants} from '../../comman/constant';
import {TopicService} from '../../services/topic.service';
import {TopicModel} from '../../model/topic.model';
import {CourseModel} from '../../model/course.model';
import {PagerService} from '../../services/comman-service/page.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent implements OnInit {
  public courseArray: any = [];
  public courses;
  public topic;
  public addTopic;
  public topicModel: TopicModel = new TopicModel();
  public courseModel: CourseModel = new CourseModel();
  public show: boolean;
  public display: boolean;
  public courseId: string;
  public courseNAme: string;
  public courseDescription: string;
  public topicID: string = '';
  // array of all items to be paged
  private allItems: any = [];
  private item: any[];
  /*  item:any ={
     'id':'',
     'name':'',
     'description':''
   }*/
  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private topicService: TopicService, private pagerService: PagerService) {
  }

  ngOnInit() {
    this.getAllCourses();
    this.getAllTopic();
  }

  /*Get All topics */
  public getAllTopic() {
    this.topicService.getAllCourseService().subscribe(response => {
      this.addTopic = response;
    });
  }

  /*Get All Courses */
  public getAllCourses() {
    this.topicService.getAllCourses().subscribe(response => {
      this.courseArray = response;
      this.courses = response;

      // set items to json response
      for (let o of this.courseArray) {
       // console.log("before ",this.courseArray);
        this.courseModel.id = o.id;
        this.courseModel.name = o.name;
        this.courseModel.description = o.description;
        /*//this.courseArray.shift('topic');
        //this.item = o.id;
        /!*  this.item = o.name;
          this.item = o.description;*!/

        /!* this.item.id = o.id;
         this.item.name = o.name;
         this.item.description = o.description;*!/
        //console.log(this.courseModel)*/
      }
      this.allItems = this.courseModel;

      // initialize to page 1
      this.setPage(1);

    });
  }


  public getAllCourseByTopicId(topicId, courseId) {
    this.topicService.getAllCourseByTopicId(topicId, courseId).subscribe(response => {
      //console.log("res",response);
      this.show = true;
      this.courseModel.id = response.id;
      this.courseModel.name = response.name;
      this.courseModel.description = response.description;
      this.topicModel.id = response.topic.id;
      this.topicModel.name = response.topic.name;
      this.topicModel.description = response.topic.description;

    });
  }

  /*Add New Course For Topic*/
  public addCourse(topicId, course) {
    topicId = this.topicID;
    this.courseModel.id = this.courseId;
    this.courseModel.name = this.courseNAme;
    this.courseModel.description = this.courseDescription;
    console.log(this.courseModel);
    this.topicService.addCourse(topicId, this.courseModel).subscribe(response => {
      this.resetCourseFields();
    });
  }

  /*reset course fields*/
  public resetCourseFields() {
    this.courseId = '';
    this.courseNAme = '';
    this.courseDescription = '';
  }


  /*use to view Topic container in search course*/
  viewTopic() {
    this.display = true;
  }


  setPage(page: number) {
    if (page < 1 || page > this.pager.totalPages) {
      return;
    }

    // get pager object from service
    this.pager = this.pagerService.getPager(this.allItems.length, page);

    // alert("pager" +JSON.stringify(this.pager));

    // get current page of items
    this.pagedItems = this.allItems.slice(this.pager.startIndex, this.pager.endIndex + 1);
    // alert("pagedItems" +JSON.stringify(this.pager));
  }


  public edit() {

  }

  public deleteCourse() {

  }

  public viewTopicTable() {

  }
}
