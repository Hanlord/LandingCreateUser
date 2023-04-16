import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 

@NgModule({
 
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule 
  ],
  providers: [],
 
})
export class AppModule { }

@Component({
  selector: 'create-form',
  templateUrl: './create-form.component.html',
  styleUrls: ['./create-form.component.scss']
})
export class CreateFormComponent implements OnInit {
  formInfo: FormGroup | undefined;
  constructor() { }
   
  ngOnInit(): void {
    ({
      fname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      lname: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(50)]],
      email: ['', [Validators.required, Validators.email]],
      phone: ['', [Validators.required, Validators.pattern(/^\+[0-9]{1,3}[0-9]{3,14}$/)]],
      fcheck: ['', [Validators.requiredTrue]]
    });
  }
  onSubmit(): void {
    if (this.formInfo && this.formInfo.valid) {
      const formData = this.formInfo.value;
      this.formInfo.reset();
  }}
}
