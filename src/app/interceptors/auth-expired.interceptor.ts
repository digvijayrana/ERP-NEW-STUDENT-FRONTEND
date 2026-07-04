import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';
import { APP_CONSTANTS } from '../core/constants';

export const authExpiredInterceptor: HttpInterceptorFn = (req, next) => {
  return next(req).pipe(
    tap({
      error: (error) => {
        if (error.status === 401 && localStorage.getItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY)) {
          localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_TOKEN_KEY);
          localStorage.removeItem(APP_CONSTANTS.LOCAL_STORAGE_USER_KEY);
          window.location.reload();
        }
      }
    })
  );
};
