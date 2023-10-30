import {Component} from '@angular/core';

@Component({
  selector: 'app-shop-menu',
  templateUrl: './shop-menu.component.html',
  styleUrls: ['./shop-menu.component.css']
})
export class ShopMenuComponent
{
  testAr: any[] = [
    {
      id: 0,
      name: "Iphone 15",
      imgSrc: "https://www.optus.com.au/content/dam/optus/images/shop/mobile/phones/apple/iphone-15-pro/carousel/SD-PDP-01-iphone-15-pro-natural-titanium-front-back.jpg",
      price: 1500,
    },
    {
      id: 1,
      name: "Redmi note 9 opro",
      imgSrc: "https://zhiyunkala.com/wp-content/uploads/2020/12/1-7.jpg",
      price: 300,
    }];
}
