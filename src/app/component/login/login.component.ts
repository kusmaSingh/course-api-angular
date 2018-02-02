import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {UserModel} from '../../model/user.model';
import {Route, Router} from '@angular/router';
import {FormBuilder, Validators} from '@angular/forms';
import {CommonService} from '../../services/comman-service/common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public userModel: UserModel = new UserModel();
  public responseMsg: string;
  public isErr: boolean;
  public loginForm:any;

  constructor(private  loginService: LoginService, private router: Router,
  private formBuilder:FormBuilder, private commonService:CommonService) {
  }

  ngOnInit() {
  this.validation();
    console.log(this.loginForm.value);
  }

  public login() {
    this.loginService.login(this.userModel).subscribe(response => {
      if (response.statusCode == 200) {
        this.userModel.id = response.data.id;
        this.userModel.username = response.data.username
        this.router.navigate(['/home/courses']);
        let userDetail ={
          'id':response.data.id,
          'username':response.data.username
        }
     this.commonService.setAuthenticareUserInformation( userDetail);
      }
      else if(response.statusCode==500) {
        this.responseMsg = response.message;
      }
      else{
        this.responseMsg = response.message;
      }
    }),
        err=>{
      console.log(err.error);
    }
  }

  //Check login form validation
  private validation() {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required, ]],
      password: ['', Validators.required],
    });
  }

}
