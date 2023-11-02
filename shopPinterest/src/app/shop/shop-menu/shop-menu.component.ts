import {Component, OnInit} from '@angular/core';
import {isEmpty} from 'rxjs';
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
    if (this.selectedPhonePrices.length == 0 || this.phoneArray.length == 0)
    {
      this.overAllPrice = 0;
    } else 
    {
      console.log(this.selectedPhonePrices);
      this.overAllPrice = this.selectedPhonePrices.reduce((pre: any, cur: any) => 
      {
        return cur.price + pre;
      }, 0);
    }
  }


  addPhone(phone: any)
  {
    this.selectedPhonePrices.push(phone);
    this.priceCal();
  }

  increaseQuantity(i: any)
  {
    this.phoneArray[i].quantity += 1;
  }

  decreaseQuantity(i: any)
  {
    this.phoneArray[i].quantity -= 1;
  }

  removePhone(i: any)
  {
    this.selectedPhonePrices.splice(i, 1);
    this.priceCal();
  }

  deleteItem(i: any)
  {
    this.phoneArray.splice(i, 1);
    // this.selectedPhonePrices = this.phoneArray;
    this.priceCal();
  }
}
