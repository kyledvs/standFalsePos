import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthService } from '../services/basic-auth.service';

export interface User {
  name?: string;
  email?: string;
  password?: string;
  role?: 'admin' | 'assistant' | 'super';
  [key: string]: any; // optional catch-all for Firestore extras
}

@Injectable({
  providedIn: 'root'
})
export class RoleGuardService {
  constructor(private auth: BasicAuthService, private router: Router) { }

  canActivate(): boolean {
    const user = this.auth.getUser();
    if (user && typeof user.role === 'string' && ['admin', 'assistant', 'super'].includes(user.role)) {
      return true;
    }
    console.log('wwwwfgdfgdgf')
    this.router.navigate(['/']);
    return false;
  }
}
