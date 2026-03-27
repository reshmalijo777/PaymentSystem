import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  standalone: true,
  selector: 'app-receipt',
  imports: [CommonModule],
  template: `
    <div class="receipt-container">
      <h2>Payment Submitted</h2>

      <div *ngIf="data; else noData">
        <p><strong>Reference:</strong> {{ data.paymentReference }}</p>
        <p><strong>Status:</strong> {{ data.status }}</p>
        <p><strong>Submitted:</strong> {{ data.submittedAt | date:'medium' }}</p>
        <button (click)="goBack()">Back to Payment</button>
      </div>

      <ng-template #noData>
        <p>No payment data found. Redirecting...</p>
      </ng-template>
    </div>
  `,
  styles: [`
    .receipt-container {
      max-width: 450px;
      margin: 3rem auto;
      padding: 2rem;
      border-radius: 12px;
      background-color: #f9fafb;
      box-shadow: 0 6px 15px rgba(0,0,0,0.1);
      text-align: center;
      font-family: Arial, sans-serif;
    }
    h2 {
      color: #16a34a;
      margin-bottom: 1rem;
    }
    p {
      margin: 0.5rem 0;
      font-size: 1rem;
    }
    button {
      margin-top: 1rem;
      padding: 0.7rem 1rem;
      border: none;
      border-radius: 6px;
      background-color: #1a73e8;
      color: white;
      cursor: pointer;
      font-weight: bold;
    }
    button:hover {
      background-color: #1558b0;
    }
  `]
})
export class ReceiptComponent {
  data: any;

  constructor(private router: Router) {
    this.data = history.state.payment;

    if (!this.data) {
      setTimeout(() => this.router.navigate(['/']), 1000);
    }
  }

  goBack() {
    this.router.navigate(['/']);
  }
}
