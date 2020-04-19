import {Component, OnInit, ViewChild} from '@angular/core';
import {PerfectScrollbarComponent, PerfectScrollbarConfigInterface} from 'ngx-perfect-scrollbar';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public openedMenu = false;
  public config: PerfectScrollbarConfigInterface = {};
  @ViewChild(PerfectScrollbarComponent, {static: false}) componentRef?: PerfectScrollbarComponent;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }

}
