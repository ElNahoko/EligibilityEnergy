export enum CivilityEnum {
  Misses = 'Madame',
  Mister = 'Monsieur',
  Other = 'Autre'
}  

export type Person = {
    civility: CivilityEnum;
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
  }

  export default Person;