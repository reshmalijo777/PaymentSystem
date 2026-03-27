export interface Merchant {
  id: string;
  displayName: string;
  primaryColor: string;
  secondaryColor: string;
  logoUrl: string;
}

export interface PaymentRequest {
  merchantId: string;
  amount: number;
  cardNumber: string;
  expiryMonth: number;
  expiryYear: number;
  cvv: string;
  customerEmail: string;
}

export interface PaymentResponse {
  paymentReference: string;
  status: string;
  submittedAt: string;
}
