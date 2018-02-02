import {Component, OnInit} from '@angular/core';
import {UserModel} from '../../model/user.model';
import {UserService} from '../../services/user.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  public userModel: UserModel = new UserModel();
  public signupForm: any;
  reponseMsg: string;

  constructor(private userService: UserService) {
  }

  ngOnInit() {
  }

  public signupUser() {
    this.userService.userRegistration(this.userModel).subscribe(response => {
      if (response.statusCode == 200) {

        this.reponseMsg = 'You are succesfully resgister with Mentor';;
      }
      else {
        let message = 'There is somthinf went worng';
      }
    });
  }
}

