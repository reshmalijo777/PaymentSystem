import { Routes } from '@angular/router';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { ReceiptComponent } from './components/receipt/receipt.component';

export const routes: Routes = [
  { path: '', component: PaymentFormComponent },
  { path: 'receipt', component: ReceiptComponent }
];
