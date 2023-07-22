import { CivilityEnum } from "./person-model";

export type PersonalInfo = {
    
    civility: CivilityEnum;
    firstName: string;
    lastName: string;
    email: string;
    phone?: string;
  }

const defaultPersonalInfo: PersonalInfo = {
    civility: CivilityEnum.Other,
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
  };
  
  export default defaultPersonalInfo;