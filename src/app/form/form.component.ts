import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  @ViewChild('myForm') myForm: NgForm;

  public form = {};

  constructor(private titleService: Title) { }

  setTitle (newTitle: string) {
    this.titleService.setTitle( newTitle );
  }

  ngOnInit() {
    this.setTitle('Ask about our new Software Engineering, B.S ');
  }

  getErrors() {
    const errorList = [];

    const controls = this.myForm.controls;

    for(let controlKey in controls) {
      let currentControlErrors = controls[controlKey].errors;

      for(let errorKey in currentControlErrors) {
        errorList.push(`${controlKey} error: ${errorKey}`);
      }
    }

    return errorList;
  }

  onRoomSubmission(myForm: NgForm) {
    console.log(myForm);

    if (this.myForm.valid) {
      document.getElementById('inquiry').className += ' success';
      this.myForm.resetForm();
    }
  }

}
