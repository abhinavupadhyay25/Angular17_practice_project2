import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './template-form.component.html',
  styleUrl: './template-form.component.css',
})
export class TemplateFormComponent {
  isFormSubmit: boolean = false;
  userObj: any = {
    firstName: '',
    lastName: '',
    email: '',
    city: '',
    state: '',
    pincode: '',
    isAgree: false,
  };
  onSubmit() {
    this.isFormSubmit = true;
    console.log(this.userObj);
  }
}
