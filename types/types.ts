type HairInfo = {
  color: string;
  type: string;
};

type CoordinatesInfo = {
  lat: number;
  lng: number;
};

type AddressInfo = {
  address: string;
  city: string;
  coordinates: CoordinatesInfo;
  postalCode: string;
  state: string;
};

type BankInfo = {
  cardExpire: string;
  cardNumber: string;
  cardType: string;
  currency: string;
  iban: string;
};

type CompanyInfo = {
  address: AddressInfo;
  department: string;
  name: string;
  title: string;
};

export type UserInfo = {
  id: number;
  firstName: string;
  lastName: string;
  maidenName: string;
  age: number;
  gender: string;
  email: string;
  phone: string;
  username: string;
  password: string;
  birthDate: string;
  image: string;
  bloodGroup: string;
  height: number;
  weight: number;
  eyeColor: string;
  hair: HairInfo;
  domain: string;
  ip: string;
  address: AddressInfo;
  macAddress: string;
  university: string;
  bank: BankInfo;
  company: CompanyInfo;
  ein: string;
  ssn: string;
  userAgent: string;
};

export type Users = UserInfo[];
