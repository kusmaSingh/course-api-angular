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
  public courseArray:Object =[] ;
  public courses = Constants.courseType;
  public topic = Constants.topicType;
  public topicModel: TopicModel = new TopicModel();
  public courseModel: CourseModel = new CourseModel();
  public show : boolean;
  public display:boolean;

  // array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  constructor(private topicService: TopicService, private pagerService :PagerService) {
  }

  ngOnInit() {
    this.getAllCourses()
  }
  /*Get All Courses */
  public getAllCourses(){
    this.topicService.getAllCourses().subscribe(response=>{
      debugger;
      this.courseArray = response;
      var test =JSON.stringify(this.courseArray)

      console.log(test );
    })
  }


  public getAllCourseByTopicId(topicId, courseId) {
    this.topicService.getAllCourseByTopicId(topicId, courseId).subscribe(response => {
      console.log("res",response);
      this.show= true;
      this.courseModel.id= response.id
      this.courseModel.name= response.name
      this.courseModel.description= response.description
      this.topicModel.id=response.topic.id;
      this.topicModel.name=response.topic.name;
      this.topicModel.description=response.topic.description;
    });
  }
  viewTopic(){
    this.display= true;
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

  public edit(){

  }

  public deleteCourse(){

  }

  public viewTopicTable(){

  }
}
