import {Component, OnInit, ChangeDetectorRef, AfterContentChecked, Input, ViewChild} from '@angular/core';

import {MatMenu} from '@angular/material/menu';
@Component({
  selector: 'app-menu-item',
  templateUrl: './menu-item.component.html',
  styleUrls: ['./menu-item.component.css']
})
export class MenuItemComponent implements OnInit
{
  @Input() items: any[] = [];
  @ViewChild('childMenu') public childMenu: any;


  // @ViewChild('childMenu', {static: false}) public childMenu!: MatMenu;

  constructor(private changeDetector: ChangeDetectorRef) {}
  ngOnInit() {}
}
