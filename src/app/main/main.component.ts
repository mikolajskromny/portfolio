import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  public openedMenu = false;

  constructor() {
  }

  ngOnInit() {
  }

  toggleMenu() {
    this.openedMenu = !this.openedMenu;
  }

}
