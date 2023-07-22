
export enum OwnershipEnum {
  Owner = 'Owner',
  Tenant = 'Tenant'
}
export interface ProjectInfo {
  ownership: OwnershipEnum;
  numberOfPeople: number;
  householdIncome: number;
  area: number;
  costOfProject: number; // Fix the property name here
}


const defaultProjectInfo: ProjectInfo = {
  ownership: OwnershipEnum.Tenant,
  numberOfPeople: 0,
  householdIncome: 0,
  area: 0,
  costOfProject: 0,
};


export default defaultProjectInfo;