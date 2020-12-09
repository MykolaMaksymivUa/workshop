import { Injectable } from '@angular/core';
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
  HttpResponse,
  HttpEventType,
  HttpErrorResponse
} from '@angular/common/http';

import { Observable } from 'rxjs';
import { filter, map, tap } from 'rxjs/operators';

@Injectable()
export class TsInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const reqStart = performance.now();
    let status: string;

    // response interceptor
    return next.handle(req).pipe(
      filter((event: HttpEvent<any>) => event.type === HttpEventType.Response),
      tap(
        (event: HttpEvent<any>) => status = event instanceof HttpResponse ? 'succeeded' : '',
        (error: HttpErrorResponse) => status = 'failed',
      ),
      map((event: HttpResponse<any>) => {
        if (event.url.includes('cartData')) {
          const evaluationTime = performance.now() - reqStart;
          console.log(`${req.method} "${req.urlWithParams}" ${status} in ${evaluationTime.toFixed(0)} ms.`);
        }

        return event;
      })
    );
  }
}
