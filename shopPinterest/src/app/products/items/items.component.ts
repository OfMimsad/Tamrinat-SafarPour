import {Component, OnInit} from '@angular/core';
import {PhonesService} from 'src/app/phones.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit
{
  phonesArry: any[] = [];
  boughtPhones: any[] = [];
  constructor(private phoneService: PhonesService)
  {
    this.phonesArry = this.phoneService.getPhones();
    // console.log(this.phonesArry);
  }
  ngOnInit()
  {
    // this.phoneService.deleteDB();
  }

  incrementQuantity(phone: any)
  {

    let hasPhone = this.boughtPhones.includes(phone);
    // console.log(hasPhone);
    if (hasPhone == false)
    {
      this.boughtPhones.push(phone);
    }
    if (hasPhone == true)
    {
      alert("کالا قبلا به سید خرید شما اضافه شده است");
    }

    // console.log(this.boughtPhones);
  }

  pushToService()
  {
    // this.phoneService.pushToSelected(this.boughtPhones).subscribe();
    this.phoneService.pushToobsSelected(this.boughtPhones);
  }
}
