import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { RouterOutlet } from '@angular/router';

import { SpinnerService } from './core/widgets';
import { AppSettingsService } from './core/services/';
import { AppSettingsModel } from './core/models/app-settings.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(
    private titleService: Title,
    public spinner: SpinnerService,
    private settingsService: AppSettingsService
  ) {

  }
  ngOnInit(): void {
    this.settingsService.loadSettings()
      .subscribe((config: AppSettingsModel) => console.log(config))
  }

  onActivate(event: any, routerOutlet: RouterOutlet): void {
    this.titleService.setTitle(routerOutlet.activatedRouteData.title);
  }
}
