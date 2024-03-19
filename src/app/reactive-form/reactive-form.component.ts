import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './reactive-form.component.html',
  styleUrl: './reactive-form.component.css',
})
export class ReactiveFormComponent {
  userForm: FormGroup;
  isFormSubmitted: boolean = false;
  constructor() {
    this.userForm = new FormGroup({
      firstName: new FormControl('', [
        Validators.required,
        Validators.minLength(5),
      ]),
      lastName: new FormControl(),
      email: new FormControl('', [Validators.required, Validators.email]),
      city: new FormControl(),
      state: new FormControl(),
      pincode: new FormControl(),
      isAgree: new FormControl(),
    });
  }
  onSubmit() {
    this.isFormSubmitted = true;
    console.log(this.userForm.value);
  }
}
