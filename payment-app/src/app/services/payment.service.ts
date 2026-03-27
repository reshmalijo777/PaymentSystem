import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface PaymentRequest { 
  merchantId: string; amount: number; cardNumber: string;
  expiryMonth: number; expiryYear: number; cvv: string; customerEmail: string;
}
export interface PaymentResponse { paymentReference: string; status: string; submittedAt: string; }

@Injectable({ providedIn: 'root' })
export class PaymentService {
  private http = inject(HttpClient);
  private baseUrl = environment.apiBaseUrl;

  submitPayment(request: PaymentRequest): Observable<PaymentResponse> {
    return this.http.post<PaymentResponse>(`${this.baseUrl}/payments`, request);
  }
}
