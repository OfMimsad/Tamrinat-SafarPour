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
  constructor(private phoneService: PhonesService) {}
  ngOnInit()
  {

  }


}


////////////// JSON SERVER