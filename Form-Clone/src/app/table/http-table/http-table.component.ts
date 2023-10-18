import {Component} from '@angular/core';
import {BackendService} from 'src/app/backend.service';
@Component({
  selector: 'app-http-table',
  templateUrl: './http-table.component.html',
  styleUrls: ['./http-table.component.css']
})
export class HttpTableComponent
{
  datas: any[] = [];
  constructor(private backendService: BackendService) {}

  ngOnInit()
  {
    this.backendService.getData().subscribe({
      next: (data) => {this.datas = data.products}
    });
  }


}
