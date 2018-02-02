import {Component, OnInit} from '@angular/core';
import {CommonService} from '../../services/comman-service/common.service';
import {UserModel} from '../../model/user.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  public userid;
  public currentUser;

  constructor(private commonService: CommonService) {
  }

  ngOnInit() {
    this.currentUser = this.commonService.getAuthenticareUserInformation();
    console.log("user",JSON.stringify(this.currentUser));
  }

}
