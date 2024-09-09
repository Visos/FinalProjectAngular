import { CanActivateChildFn, CanActivateFn, Router } from '@angular/router';
import { AuthService } from './auth.service';
import { inject } from '@angular/core';

export const authRoleGuard: CanActivateChildFn = (route, state) => {
  
  const authService = inject(AuthService);
  const router = inject(Router);
  
  return authService.isRoleAdmin();
};
