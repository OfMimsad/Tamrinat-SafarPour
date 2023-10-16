import { Component } from '@angular/core';
import { FormGroup, FormControl, FormArray } from '@angular/forms';
import { FormBuilder } from '@angular/forms';
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css'],
})
export class ReactiveFormsComponent {
  formData: any;
  userProfileForm: FormGroup;
  editFlag?: boolean;
  selectedEditIndex: number = 0;
  constructor(private fb: FormBuilder) {
    this.editFlag = false;
    this.formData = [];
    this.userProfileForm = this.fb.group({
      firstname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*'),
        ],
      ],
      lastname: [
        '',
        [
          Validators.required,
          Validators.minLength(3),
          Validators.pattern('^[a-zA-Z]*'),
        ],
      ],
      fathername: [
        '',
        [Validators.minLength(3), Validators.pattern('^[a-zA-Z]*')],
      ],
      email: ['', [Validators.email, Validators.required]],
      phonenumber: this.fb.array([
        this.fb.control('', [
          Validators.pattern(
            '^(9|09)+(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)+([0-9]{7})$'
          ),
          Validators.required,
        ]),
      ]),
    });
  }
  get firstName() {
    return this.userProfileForm.get('firstname');
  }
  get numbers() {
    return this.userProfileForm.get('phonenumber') as FormArray;
  }
  get lastName() {
    return this.userProfileForm.get('lastname');
  }
  get fatherName() {
    return this.userProfileForm.get('fathername');
  }
  get email() {
    return this.userProfileForm.get('email');
  }
  addNumber() {
    this.numbers.push(
      this.fb.control('', [
        Validators.pattern(
          '^(9|09)+(10|11|12|13|14|15|16|17|18|19|90|91|92|30|33|01|02|03|04|05|35|36|37|38|39|32|20|21|22)+([0-9]{7})$'
        ),
        Validators.required,
      ])
    );
  }

  onSubmit(): void {
    if (this.editFlag == false) {
      this.formData.push(this.userProfileForm.value);
      console.log(this.formData);
      this.userProfileForm.reset();
    }
    if (this.editFlag == true) {
      this.formData[this.selectedEditIndex] = this.userProfileForm.value;
      this.editFlag = !this.editFlag;
      this.userProfileForm.reset();
    }
  }

  edit(i: number) {
    this.selectedEditIndex = i;
    this.userProfileForm.setValue(this.formData[i]);
    this.editFlag = !this.editFlag;
  }
  deleteData(i: number) {
    let row = document.getElementById(`${i}`);
    row?.remove();
    this.formData.splice(i, 1);
  }
  removeNum(i: number) {
    this.numbers.removeAt(i);
  }
}
