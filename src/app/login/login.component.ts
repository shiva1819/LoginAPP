import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AbstractControl, FormGroup, FormControl, Validators } from '@angular/forms';
// import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  errorLog:any;

  constructor(
    private router: Router,
    // private http:HttpClient, 
    ) {
      this.loginForm = new FormGroup({
        email: new FormControl(null, Validators.required),
        password: new FormControl(null, Validators.required)
      });
     }

  ngOnInit(): void {
  }

  isValid(controlName) {
    return this.loginForm.get(controlName).invalid && this.loginForm.get(controlName).touched;
  }

  login() {
     
    console.log(this.loginForm.valid);    
    if (this.loginForm.valid) {
      this.router.navigate(['/home']);    
    }else{
      this.errorLog = 'All fields are mandatory'
    }
  }

}
