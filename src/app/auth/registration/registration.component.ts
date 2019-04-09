import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { NgForm } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent {

  error: any
  loading: boolean = false
  model: any = {
    username: '',
    firstName: '',
    lastName: '',
    password: ''
  }

  constructor(
    private http: HttpClient,
    private router: Router,
    private authService: AuthService
  ) { }

  onSubmit(registerForm: NgForm): void {
    if (registerForm.valid) {
      this.register();
    }
  }

  async register() {
    this.loading = true
    await this.http.post('/api/registration', this.model)
    .subscribe(
      () => {
        this.authService.login(this.model.username, this.model.password);
        this.router.navigate(['/app/tweets']);
      },
      er => this.error = er.error.message 
    );
    this.loading = false
  }

  isFormSubmittedWithInvalidUsername(registerForm: NgForm): boolean {
    const usernameFormControl = registerForm.form.controls['username'];
    return registerForm.submitted && usernameFormControl && !usernameFormControl.valid;
  }
  isFormSubmittedWithInvalidFirstname(registerForm: NgForm): boolean {
    const firstNameFormControl = registerForm.form.controls['firstName'];
    return registerForm.submitted && firstNameFormControl && !firstNameFormControl.valid;
  }
  isFormSubmittedWithInvalidLastname(registerForm: NgForm): boolean {
    const lastNameFormControl = registerForm.form.controls['lastName'];
    return registerForm.submitted && lastNameFormControl && !lastNameFormControl.valid;
  }
  isFormSubmittedWithInvalidPassword(registerForm: NgForm): boolean {
    const passwordFormControl = registerForm.form.controls['password'];
    return registerForm.submitted && passwordFormControl && !passwordFormControl.valid;
  }


}
