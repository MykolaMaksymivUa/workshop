import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

import { SpinnerService } from './../../widgets/spinner/spinner.service';
import { AuthService } from '../../services';
// rxjs
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  message: string;
  private unsubscribe: Subject<void> = new Subject();

  constructor(
    public authService: AuthService,
    private router: Router,
    private spinner: SpinnerService,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('[takeUntil ngOnDestroy]');
    this.unsubscribe.complete();
  }

  onLogin() {
    this.spinner.show();

    const observer = {
      next: () => {
        if (this.authService.isLoggedIn) {
          const redirect = this.authService.redirectUrl
            ? this.authService.redirectUrl
            : '';

          this.spinner.hide();
          this.router.navigate([redirect]);
        }
      },
      error: (err: any) => console.log(err),
    };
    this.authService
      .login()
      .pipe(takeUntil(this.unsubscribe))
      .subscribe(observer);
  }

  onLogout() {
    this.authService.logout();
  }
}
