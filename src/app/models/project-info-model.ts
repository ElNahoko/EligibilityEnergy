export interface ProjectInfo {
  ownership: OwnershipEnum;
  numberOfPeople: number;
  householdIncome: number;
  area: number;
  costOfProject: number; // Fix the property name here
}


export enum OwnershipEnum {
  Owner = 'Owner',
  Tenant = 'Tenant'
}
