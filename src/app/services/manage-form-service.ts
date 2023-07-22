import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import defaultPersonalInfo, { PersonalInfo } from '../models/personal-info-model';

@Injectable({
  providedIn: 'root'
})
export class ManageFormService {
  private formSource = new BehaviorSubject<PersonalInfo>(defaultPersonalInfo);
  currentForm = this.formSource.asObservable();

  constructor() { }

  changeForm(form: PersonalInfo) {
    this.formSource.next(form);
  }
}