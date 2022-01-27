import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenService {

  ACCESS_TOKEN = 'access_token';

  REFRESH_TOKEN = 'refresh_token';

  constructor() {
  }

  getToken(): string | null {
    return localStorage.getItem(this.ACCESS_TOKEN);
  }

  getRefreshToken(): string | null{
    return localStorage.getItem(this.REFRESH_TOKEN);
  }

  saveToken(token:any): void {
    localStorage.setItem(this.ACCESS_TOKEN, token);
  }

  saveRefreshToken(refreshToken:any): void {
    localStorage.setItem(this.REFRESH_TOKEN, refreshToken);
  }

  removeToken(): void {
    localStorage.removeItem(this.ACCESS_TOKEN);
  }

  removeRefreshToken(): void {
    localStorage.removeItem(this.REFRESH_TOKEN);
  }
}
