import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent {
  formData: any;
  constructor() {
    this.formData = [];
  }
  onSubmit(form: NgForm) {
    this.formData.push(form.value);
    form.reset();
  }

  deletTabelRow(i: number) {}
}
