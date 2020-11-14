import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../service/auth.service';
import { AlertController } from '@ionic/angular';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { UsernameValidator } from '../../validators/username';
import { PasswordValidator } from '../../validators/password';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {

  registerFirstPage: FormGroup
  registerSecondPage: FormGroup

  segmentModel = "register"
  secondPage = true
  submitAttempt= false

  constructor(
    private auth: AuthService,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    this.registerFirstPage = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]), UsernameValidator.checkUsername ],
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      rPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')]), (control => PasswordValidator.confirmPassword(control, this.registerFirstPage, 'cPassword'))],
      cPassword: ['', Validators.compose([Validators.required]), (control => PasswordValidator.confirmPassword(control, this.registerFirstPage, 'rPassword'))],
      sex: ['']
    },
    {
      updateOn: "blur"
    })

    this.registerSecondPage = formBuilder.group({
      email: [''],
      cEmail: [''],
      areaCode: [''],
      phone: [''],
      zip: [''],
      city: [''],
      street: [''],
      housenumber: ['']
    })
  }

  /* E-Mail Validator
  email: new FormControl('', [
		Validators.required,
		Validators.pattern('^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$')
	])
  */

  ngOnInit() {
  }

  /*login() {
    this.auth.login().subscribe(async res => {
      if (res) {
        this.router.navigateByUrl('/home')
      } else {
        const alert = await this.alertCtrl.create({
          header: 'Login Failed',
          message: 'Wrong credentials',
          buttons: ['OK']
        })

        await alert.present()
      }
    })
  }*/

  register() {

  }

  next() {
    if (this.registerFirstPage.valid) {
      this.secondPage = true
      console.log(this.registerFirstPage.controls['username'].value)
      console.log(this.registerFirstPage.controls['firstname'].value)
      console.log(this.registerFirstPage.controls['lastname'].value)
      console.log(this.registerFirstPage.controls['rPassword'].value)
      console.log(this.registerFirstPage.controls['sex'].value)
    }
  }

  onSubmit() {

  }

  formInputIsRequired(formInput: string) {
    if (this.registerFirstPage.controls[formInput]) {
      if (this.registerFirstPage.controls[formInput].hasError('required')) {
        return true;
      }
    }

    return false;
  }

  segmentChanged(event) {
    this.secondPage = false
  }

}
