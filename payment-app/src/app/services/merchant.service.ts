import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface Merchant {
  id: string;
  displayName: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}

@Injectable({ providedIn: 'root' })
export class MerchantService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  getMerchantById(id: string): Observable<Merchant> {
    return this.http.get<Merchant>(`${this.baseUrl}/merchant/${id}`);
  }
}
