import {Component} from '@angular/core';
import {PhonesService} from 'src/app/phones.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent
{
  phonesArry: any[] = [];
  constructor(private phoneService: PhonesService)
  {
    this.phonesArry = this.phoneService.getPhones();
    console.log(this.phonesArry);
  }
}
