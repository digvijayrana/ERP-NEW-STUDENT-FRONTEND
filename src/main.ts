import { bootstrapApplication } from '@angular/platform-browser';
import { provideHttpClient, withInterceptors } from '@angular/common/http';
import { provideRouter } from '@angular/router';

import { AppComponent } from './app/app.component';
import { authExpiredInterceptor } from './app/interceptors/auth-expired.interceptor';

bootstrapApplication(AppComponent, {
  providers: [provideHttpClient(withInterceptors([authExpiredInterceptor])), provideRouter([])]
}).catch((err) => console.error(err));
