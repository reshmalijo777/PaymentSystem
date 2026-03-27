import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { PaymentService } from '../../services/payment.service';
import { MerchantService } from '../../services/merchant.service';

@Component({
  selector: 'app-payment-form',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  template: `
    <div class="payment-form-container">
      <img *ngIf="logoUrl" [src]="logoUrl" alt="Merchant Logo" class="merchant-logo" />

      <h2>Make a Payment</h2>

      <form [formGroup]="form" (ngSubmit)="submit()">
        <label>Merchant</label>
        <select formControlName="merchantId">
          <option value="merchant-a">Merchant A</option>
          <option value="merchant-b">Merchant B</option>
        </select>

        <label>Amount</label>
        <input formControlName="amount" type="number" placeholder="Enter amount" />

        <label>Card Number</label>
        <input formControlName="cardNumber" placeholder="XXXX XXXX XXXX XXXX" />

        <div class="row">
          <div>
            <label>Expiry Month</label>
            <input formControlName="expiryMonth" type="number" min="1" max="12" />
          </div>
          <div>
            <label>Expiry Year</label>
            <input formControlName="expiryYear" type="number" />
          </div>
          <div>
            <label>CVV</label>
            <input formControlName="cvv" type="text" placeholder="123" />
          </div>
        </div>

        <label>Email</label>
        <input formControlName="customerEmail" type="email" placeholder="you@example.com" />

        <button type="submit" [disabled]="form.invalid">Submit Payment</button>
      </form>
    </div>
  `,
  styles: [`
    .merchant-logo {
      display: block;
      max-width: 150px;
      margin: 0 auto 1rem;
    }
    .payment-form-container {
      max-width: 500px;
      margin: 3rem auto;
      padding: 2rem;
      border-radius: 12px;
      background-color: #f1f5f9;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      font-family: Arial, sans-serif;
    }
    h2 {
      text-align: center;
      color: #1a73e8;
      margin-bottom: 1.5rem;
    }
    label {
      display: block;
      margin: 0.5rem 0 0.2rem;
      font-weight: bold;
    }
    input, select {
      width: 100%;
      padding: 0.5rem;
      border-radius: 6px;
      border: 1px solid #ccc;
      margin-bottom: 1rem;
      box-sizing: border-box;
    }
    .row {
      display: flex;
      gap: 1rem;
    }
    .row div {
      flex: 1;
    }
    button {
      width: 100%;
      padding: 0.8rem;
      background-color: #1a73e8;
      color: white;
      font-weight: bold;
      border: none;
      border-radius: 6px;
      cursor: pointer;
      transition: background 0.3s;
    }
    button:disabled {
      background-color: #a5b4fc;
      cursor: not-allowed;
    }
    button:hover:enabled {
      background-color: #1558b0;
    }
  `]
})
export class PaymentFormComponent implements OnInit { // ✅ implements OnInit
  fb = inject(FormBuilder);
  router = inject(Router);
  paymentService = inject(PaymentService);
  merchantService = inject(MerchantService);

  logoUrl: string = '';

  form = this.fb.nonNullable.group({
    merchantId: 'merchant-a',
    amount: 0,
    cardNumber: '',
    expiryMonth: 1,
    expiryYear: new Date().getFullYear(),
    cvv: '',
    customerEmail: ''
  });

  ngOnInit() {
    // Load initial merchant
    this.loadMerchant(this.form.value.merchantId!);

    // Listen for merchant selection changes
    this.form.get('merchantId')?.valueChanges.subscribe(merchantId => {
      if (merchantId) this.loadMerchant(merchantId);
    });
  }

  private loadMerchant(merchantId: string) {
    this.merchantService.getMerchantById(merchantId).subscribe({
      next: merchant => {
        document.body.style.backgroundColor = merchant.primaryColor;
        this.logoUrl = merchant.logoUrl;
      },
      error: err => console.error('Error loading merchant', err)
    });
  }

  submit() {
    const value = this.form.getRawValue();
    this.paymentService.submitPayment(value).subscribe({
      next: res => this.router.navigate(['/receipt'], { state: { payment: res } }),
      error: err => console.error(err)
    });
  }
}
