import { Component, OnInit } from '@angular/core';
import { IonicAuthService } from '../ionic-auth.service';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import {Router} from "@angular/router";
import {LoadingController} from "@ionic/angular";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  userForm: FormGroup;
  successMsg: string = '';
  errorMsg: string = '';


  error_msg = {
    'email': [
      {
        type: 'required',
        message: 'Provide email.'
      },
      {
        type: 'pattern',
        message: 'Email is not valid.'
      }
    ],
    'password': [
      {
        type: 'required',
        message: 'Password is required.'
      },
      {
        type: 'minlength',
        message: 'Password length should be 6 characters long.'
      }
    ]
  };
  constructor(private router: Router,private ionicAuthService: IonicAuthService,private fb: FormBuilder, private loadingController: LoadingController) { }

  ngOnInit() {
    this.userForm = this.fb.group({
      email: new FormControl('', Validators.compose([
        Validators.required,
        Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
      ])),
      password: new FormControl('', Validators.compose([
        Validators.minLength(6),
        Validators.required
      ])),
    });
  }
  signIn(value) {
this.basicLoader();
    this.ionicAuthService.signinUser(value)
      .then((response) => {
      this.closeLoader();
        console.log(response);
        this.errorMsg = "";
        this.router.navigateByUrl('dashboard');
      }, error => {
        this.closeLoader();
        this.errorMsg = error.message;
        this.successMsg = "";
      })
  }

  basicLoader() {
    this.loadingController.create({
      message: 'Please wait...',
      duration: 3000,
      translucent: true
    }).then((res) => {
      res.present();
    });
  }
  closeLoader() {
    this.loadingController.dismiss().then((res) => {
      console.log('Loader hidden', res);
    }).catch((error) => {
      console.log(error);
    });
  }
/* AUTO HIDE a loading */
  autoHideShow() {
    this.loadingController.create({
      message: 'Dismiss after 3 seconds',
      duration: 3000
    }).then((res) => {
      res.present();
      res.onDidDismiss().then((res) => {
        console.log('Loader closed', res);
      });
    });
  }
}
