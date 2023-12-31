import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ManageFormService } from '../../services/manage-form-service';
import { OwnershipEnum } from 'src/app/models/project-info-model';

@Component({
  selector: 'app-project-info',
  templateUrl: './project-info.component.html',
  styleUrls: ['./project-info.component.css']
})
export class ProjectInfoComponent implements OnInit {
  form: FormGroup;
  ownershipChoices = Object.values(OwnershipEnum);
  submitted = false;

  constructor(
    private router: Router,
    private formService: ManageFormService,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      ownership: ['', Validators.required],
      numberOfPeople: ['', Validators.required],
      householdIncome: ['', Validators.required],
      area: ['', Validators.required]
    });
  }

  ngOnInit(): void {
    this.formService.currentProjectInfoForm.subscribe(form => this.form.patchValue(form));
  }

  next(): void {
    this.submitted = true;

    if (this.form.valid) {
      this.formService.changeProjectInfoForm({ ...this.form.value, area: +this.form.value.area });
      this.router.navigate(['/summary']);
    }
  }
}
