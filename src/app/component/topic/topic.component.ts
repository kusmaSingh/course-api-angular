import {Component, OnInit} from '@angular/core';
import {TopicService} from '../../services/topic.service';
import {TopicModel} from '../../model/topic.model';
import {PagerService} from '../../services/comman-service/page.service';

@Component({
  selector: 'app-topic',
  templateUrl: './topic.component.html',
  styleUrls: ['./topic.component.css']
})
export class TopicComponent implements OnInit {
  public topicfields = [];

  public topic: TopicModel = new TopicModel();
  public editable: boolean;
  public topicId: string;

  constructor(private topicService: TopicService,
              private pagerService: PagerService,) {
  }

// array of all items to be paged
  private allItems: any[];

  // pager object
  pager: any = {};

  // paged items
  pagedItems: any[];

  ngOnInit() {
    this.getAllTopic1();
  }

  public getAllTopic1() {
    this.topicService.getAllCourseService().subscribe(response => {
      //console.log(response);
      this.topicfields = response;
      // set items to json response
      this.allItems = response;

      // initialize to page 1
      this.setPage(1);
    });
    err => {
      console.log(err);
    };
    console.log('done');
  }

  public addTopic() {
    this.editable = false;
    if (this.topic.id === null) {
      this.topicService.addTopic(this.topic).subscribe(response => {
        this.getAllTopic1();
        this.resetTopicField();
      });
    }
    else {
      this.editTopic();
    }
    err => {
      console.log(err.error);
    };
  }


  public deleteTopic(id) {
    this.topicService.removeTopic(id).subscribe(res => {
      this.getAllTopic1();
    });
    err => {
      console.log(err.error);
    };
  }

  public editTopic() {
    this.topicService.updateTopic(this.topic, this.topicId).subscribe(response => {
      this.resetTopicField();
      this.getAllTopic1();
      window.scroll(0, 0 );
    });
    err => {
      console.log(err.error);
    };
  }

  edit(id) {
    window.scroll(50, 100);
    this.editable = true;
    this.topicService.getTopicById(id).subscribe(response => {
      var objResponse = JSON.parse(response);
      this.topic.id = objResponse.id;
      this.topicId = objResponse.id;
      this.topic.name = objResponse.name;
      this.topic.description = objResponse.description;
    });
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

  public resetTopicField() {
    this.topic.id = '';
    this.topic.name = '';
    this.topic.description = '';
  }

}
