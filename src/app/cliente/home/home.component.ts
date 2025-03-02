import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CredentialsService } from '../../services/auth/credentials.service';
import { LoginInterface } from '../../services/interfaces/auth';

@Component({
  selector: 'app-home',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {
  loginForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private credentialsService: CredentialsService
  ) {
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required]],
    })
  }


  submit() {
    if (this.loginForm.invalid) {
      return;
    }

    this.credentialsService.login(this.loginForm.value as LoginInterface).subscribe({
      next: (data) => {
        console.log(data);
      },
      error: err => {
        console.log(err)
      }
    })
  }
}

