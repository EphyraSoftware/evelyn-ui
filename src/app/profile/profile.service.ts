import {Injectable} from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) { }

  logout() {
    const opts = `redirect_uri=${environment.selfUrl}`;
    window.location.href =
      `${environment.keycloakConfig.url}realms/${environment.keycloakConfig.realm}/protocol/openid-connect/logout?${opts}`;
  }

  getProfile() {
    return this.httpClient.get(`${environment.serviceUrl}/profiles`);
  }
}
