import { Component, OnInit } from '@angular/core';
import { importModule } from 'src/app/shared/components/imports/importModule';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';
import {MatCardModule} from '@angular/material/card';
import { PageLayoutComponent }  from '@layouts/page-layout/page-layout.component';
import { ProgressBarComponent } from '@blocks/progress-bar/progress-bar.component';
import { StoreService } from '@services/store.service';
import { NgIf } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [MatInputModule,MatFormFieldModule,MatNativeDateModule,MatCardModule,PageLayoutComponent,
    ProgressBarComponent,NgIf,ReactiveFormsModule,importModule
  ],
  templateUrl: './customer-details.component.html',
  styleUrl: './customer-details.component.scss'
})
export class CustomerDetailsComponent implements OnInit {
  customerForm!: FormGroup;
constructor(    public storeService : StoreService,
  private fb: FormBuilder
){
  
}
  public ngOnInit() : void
  {
    this.customerForm = this.fb.group({
      firstName: [''],
      lastName: [''],
      mobile: [''],
      email: [''],
      address: [''],
      comment: ['']
    });
    setTimeout(_ =>
    {
      this.storeService.isLoading.set(false);
    }, 2000);
  }

  onSubmit(): void {
    console.log(this.customerForm.value);
  }
}
