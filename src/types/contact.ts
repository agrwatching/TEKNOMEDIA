// src/types/contact.ts

export interface ContactFormState {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface ContactFormErrors {
  name: string;
  email: string;
  subject: string;
  message: string;
}