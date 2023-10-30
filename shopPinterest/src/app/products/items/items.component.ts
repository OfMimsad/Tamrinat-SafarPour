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
  quantityShop: number = 0;
  boughtPhones: any[] = [];
  constructor(private phoneService: PhonesService)
  {
    this.phonesArry = this.phoneService.getPhones();
    console.log(this.phonesArry);
  }

  incrementQuantity(phone: any)
  {

    let hasPhone = this.boughtPhones.includes(phone);
    console.log(hasPhone);
    if (hasPhone == false)
    {
      this.boughtPhones.push(phone);
      this.quantityShop++;
    }
    if (hasPhone == true)
    {
      alert("کالا قبلا به سید خرید شما اضافه شده است");
    }

    console.log(this.boughtPhones);
  }

  pushToService()
  {
    this.phoneService.pushToSelected(this.boughtPhones);
  }
}
