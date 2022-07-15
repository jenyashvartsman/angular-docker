import { Component, OnInit } from '@angular/core';
import appConfig from 'src/app/config/app.config';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  appName = appConfig.appName;
  navItems = appConfig.navbarItems;

  constructor() {}

  ngOnInit(): void {}
}
