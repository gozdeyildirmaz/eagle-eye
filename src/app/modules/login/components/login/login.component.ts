import {Component, Inject, OnInit} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators
} from "@angular/forms";
import {AuthService} from "../../../../services/auth.service";
import {MatSnackBar} from '@angular/material/snack-bar';
import {Router} from "@angular/router";
// import {MAT_SNACK_BAR_DATA} from '@angular/material/snack-bar';
// import { FormGroupDirective, NgForm, Validators} from "@angular/forms";
// import {ErrorStateMatcher} from '@angular/material/core';
// import { FormControl } from '@angular/forms';


// export class MyErrorStateMatcher implements ErrorStateMatcher {
//   isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
//     const isSubmitted = form && form.submitted;
//     return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
//   }
// }
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  // emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  //
  // matcher = new MyErrorStateMatcher();

  userRegistrationForm: FormGroup;
  emailValidation: boolean = true;
  // snackBar;

  constructor(private fb: FormBuilder, private auth: AuthService, private snackBar: MatSnackBar, private router: Router) {
    this.snackBar =snackBar
  }

  ngOnInit(): void {

    this.userRegistrationForm = this.fb.group({
      password: ["", Validators.required],
      email: ["",Validators.required]
    });
  }

  login(){
    this.auth.login({email: this.userRegistrationForm.controls['email'].value, password: this.userRegistrationForm.controls['password'].value}).subscribe((x: any) => {
      debugger;
      console.log(x);
      this.router.navigate(['/camera'])
    },(err)=>{
      debugger;
      let snackBarRef = this.snackBar.open('Wrong email or wrong password!');
    })
  }

}
