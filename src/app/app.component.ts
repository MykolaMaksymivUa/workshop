import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { SpinnerService } from './core/widgets';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    public spinner: SpinnerService
  ) {

  }
  ngOnInit(): void {
  }

  onActivate(event: any, routerOutlet: RouterOutlet): void {
    this.titleService.setTitle(routerOutlet.activatedRouteData.title);
  }
}
