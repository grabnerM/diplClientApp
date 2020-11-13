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

  formRegister: FormGroup

  segmentModel = "register"
  secondPage = false
  submitAttempt= false

  constructor(
    private auth: AuthService,
    private alertCtrl: AlertController,
    private router: Router,
    private formBuilder: FormBuilder
  ) { 
    /*this.formRegister = new FormGroup({
      username: new FormControl('', [Validators.required, Validators.minLength(3), Validators.pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]),
      firstname: new FormControl('', [Validators.required, Validators.pattern('^(?:.{6,}|)$')]),
      lastname: new FormControl('', [Validators.required, Validators.pattern('^(?:.{6,}|)$')]),
      password: new FormControl('', [Validators.required, Validators.pattern('^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$')]),
      confirmPassword: new FormControl('', [Validators.required]),
      sex: new FormControl('')
    })*/

    this.formRegister = formBuilder.group({
      username: ['', Validators.compose([Validators.required, Validators.minLength(3), Validators.maxLength(20), Validators.pattern('^(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$')]), UsernameValidator.checkUsername ],
      firstname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      lastname: ['', Validators.compose([Validators.minLength(3), Validators.pattern('[a-zA-Z ]*')])],
      rPassword: ['', Validators.compose([Validators.required, Validators.pattern('^(?=.*)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$')])],
      cPassword: ['', Validators.compose([Validators.required]), PasswordValidator.checkPassword ],
      sex: ['']
    },
    {
      updateOn: "blur"
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

  onSubmit() {
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
    this.submitAttempt = true

    if (this.formRegister.valid) {
      console.log("first site success")
    }
  }

  formInputIsRequired(formInput: string) {
    if (this.formRegister.controls[formInput]) {
      if (this.formRegister.controls[formInput].hasError('required')) {
        return true;
      }
    }

    return false;
  }

  segmentChanged(event) {

  }

}
