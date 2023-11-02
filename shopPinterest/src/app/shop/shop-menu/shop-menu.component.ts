import {Component, OnInit} from '@angular/core';
import {PhonesService} from 'src/app/phones.service';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.css']
})
export class ShopMenuComponent implements OnInit
{
  phoneArray: any[] = [];
  selectedPhonePrices: any = [];
  constructor(private phoneService: PhonesService)
  {
  }

  ngOnInit()
  {
    this.getDataObsof();
    this.selectedPhonePrices = this.phoneArray.slice();
    this.priceCal();
  }

  tempArr: any = [];
  getDataObsof()
  {
    this.phoneArray = [];
    this.phoneService.returnObsOf().subscribe({
      next: (val) => 
      {
        this.tempArr = [...val];
        this.tempArr.forEach((i: any[]) =>
        {
          this.phoneArray.push(...i);
        });
        this.tempArr = [];
      }
    });
  }

  overAllPrice?: number;

  priceCal()
  {
    this.overAllPrice = this.selectedPhonePrices.reduce((pre: any, cur: any) => 
    {
      return cur.price + pre;
    }, 0);
  }


  addPhone(phone: any)
  {
    this.selectedPhonePrices.push(phone);
    this.priceCal();
    let index = this.phoneArray.find((obj) =>
    {
      obj == phone;
    });
    // console.log(index);
    // this.phoneArray[index].quantity = + 1;
    // console.log(this.phoneArray[index].quantity);
  }

  increaseQuantity(i: any)
  {
    this.phoneArray[i].quantity += 1;
    // console.log(this.phoneArray[i].quantity);
  }

  decreaseQuantity(i: any)
  {
    this.phoneArray[i].quantity -= 1;
  }

  removePhone(i: any)
  {
    if (this.selectedPhonePrices[i].quantity > 1)
    {
      this.selectedPhonePrices.splice(i, 1);
    }
    this.priceCal();
  }
}
