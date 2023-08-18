export interface User {
  name: string;
  email: string;
  password: string;
}

export const testUser: User = {
  name: 'test',
  email: 'test@email.com',
  password: 'test'
};

export type testType = 'test1' | 'test2';

export interface SomeLargePayload {
  id: string;
  name: string;
  email: string;
  password: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  fax: string;
  website: string;
  company: string;
  title: string;
  lat: number;
  lng: number;
  ip: string;
  domain: string;
  created: string;
  modified: string;
  is_active: boolean;
  is_registered: boolean;
  avatar: string;
  favorite_animal: string;
  favorite_color: string;
  balance: string;
  guid: string;
}
