import {Component} from '@angular/core';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-template-driven-form',
  templateUrl: './template-driven-form.component.html',
  styleUrls: ['./template-driven-form.component.css'],
})
export class TemplateDrivenFormComponent
{
  formData: any;
  editFlag: Boolean;
  userForm?: NgForm;
  selectedIndex?: number;
  constructor()
  {
    this.editFlag = false;
    this.formData = [];
  }
  onSubmit(form: NgForm)
  {
    if (this.editFlag == false)
    {
      this.formData.push(form.value);
      form.reset();
    }
    if (this.editFlag == true)
    {
      this.editFlag = !this.editFlag;
      this.formData.splice(this.selectedIndex, 1, form.value);
      form.reset();
    }
  }

  deletTabelRow(i: number)
  {
    let row = document.getElementById(`${i}`);
    row?.remove();
    this.formData.splice(i, 1);
  }

  editTableRow(i: number)
  {
    this.editFlag = !this.editFlag;
    this.userForm?.setValue(this.formData[i]);
    this.selectedIndex = i;
  }
  addForm(form: NgForm)
  {
    this.userForm = form;
  }
}















