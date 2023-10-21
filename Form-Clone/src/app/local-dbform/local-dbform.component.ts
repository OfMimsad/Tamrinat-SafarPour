import {Component, NgModule, OnInit} from '@angular/core';
import {DBService} from '../db.service';
import {FormBuilder, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-local-dbform',
  templateUrl: './local-dbform.component.html',
  styleUrls: ['./local-dbform.component.css']
})
export class LocalDBformComponent implements OnInit
{
  datas: any[] = [];
  editFlag: boolean = false;
  hideTable: boolean = false;
  id?: number;
  constructor(private dbService: DBService, private fb: FormBuilder, private router: Router, private route: ActivatedRoute) {}
  ngOnInit()
  {
    this.getData();
    if (this.route.snapshot.paramMap.get('id'))
    {
      this.id = Number(this.route.snapshot.paramMap.get('id'));
      this.hideTable = true;
      this.setForm(this.id);
      this.editFlag = true;
    }
  }

  form = this.fb.group({
    firstName: [''],
    lastName: [''],
    email: [''],
    id: ['']
  });

  getData()
  {
    this.dbService.getData().subscribe({next: (info) => {this.datas = info;}});
  }
  onSubmit()
  {
    this.dbService.postData(this.form.value).subscribe({complete: () => {this.getData();}});
  }

  edit(id: any)
  {
    this.router.navigate(["edit", id]);
  }
  delete(id: any)
  {
    this.dbService.deleteData(id).subscribe({complete: () => {this.getData();}});
  }

  setForm(id: any)
  {
    this.dbService.findData(id).subscribe({
      next: (data) =>
      {
        this.form.setValue(data);
      }
    });
  }

  updateForm()
  {
    this.dbService.updateData(this.id, this.form.value).subscribe({
      next: (data) =>
      {
        this.form.setValue(data);
      },
      complete: () => {this.getData();}
    });
    this.router.navigate(['DB']);
    this.hideTable = false;
  }
}
