import { ChangeDetectionStrategy, Component, Injectable, inject } from '@angular/core';
import {MatIconModule} from '@angular/material/icon';
import {MatSelectModule} from '@angular/material/select';
import {MatButtonModule} from '@angular/material/button';
import {FormControl, FormGroup, FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import { CurrencyPipe, DatePipe } from '@angular/common';
import {
  DateRange,
  MAT_DATE_RANGE_SELECTION_STRATEGY,
  MatDateRangeSelectionStrategy,
  MatDatepickerModule,
} from '@angular/material/datepicker';
import {provideMomentDateAdapter} from '@angular/material-moment-adapter';
import {DateAdapter, MatNativeDateModule, NativeDateAdapter} from '@angular/material/core';
import * as _moment from 'moment';
// tslint:disable-next-line:no-duplicate-imports
import {default as _rollupMoment} from 'moment';
import {MatTableModule} from '@angular/material/table';
const moment = _rollupMoment || _moment;
// import { MatMomentDateModule } from '@angular/material-moment-adapter';
interface Food {
  value: string;
  viewValue: string;
}
interface Days {
  value: number;
  viewValue: string;
}
interface Transaction {
  item: string;
  cost: number;
  GST: number;
}

export const MY_FORMATS = {
  parse: {
    dateInput: 'LL',
  },
  display: {
    dateInput: 'LL',
    monthYearLabel: 'MMM YYYY',
    dateA11yLabel: 'LL',
    monthYearA11yLabel: 'MMMM YYYY',
  },
};
@Component({
  selector: 'app-billing',
  standalone: true,
  templateUrl: './billing.component.html',
   providers: [provideMomentDateAdapter(MY_FORMATS),
    NativeDateAdapter,
  ],
styleUrl: './billing.component.scss',
imports: [MatFormFieldModule, MatInputModule, FormsModule, 
  MatButtonModule, MatIconModule, MatSelectModule, DatePipe, 
  MatDatepickerModule, MatNativeDateModule,ReactiveFormsModule,
  MatTableModule, CurrencyPipe
  
],
changeDetection: ChangeDetectionStrategy.OnPush,
})

export class BillingComponent {
   displayedColumns: string[] = ['item', 'GST', 'cost' ];
  transactions: Transaction[] = [
    {item: 'Bus Rent', cost: 8500, GST: 12},
    {item: 'Diesal', cost: 5000, GST: 0},
    {item: 'Driver', cost: 1000, GST: 0},
    {item: 'Tollgate', cost: 3000, GST: 0}
  ];
  today = new Date();
 month = this.today.getMonth();
 year =this. today.getFullYear();
  readonly campaignOne = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 13)),
    end: new FormControl(new Date(this.year, this.month, 16)),
  });
    readonly campaignTwo = new FormGroup({
    start: new FormControl(new Date(this.year, this.month, 15)),
    end: new FormControl(new Date(this.year, this.month, 19)),
  });
  public currentDate = new Date();
   foods: Food[] = [
    {value: 'Villupuram', viewValue: 'Villupuram'},
    {value: 'Kerala', viewValue: 'Kerala'},
    {value: 'Puducherry', viewValue: 'Puducherry'},
  ];

  days: Days[] = [
    {value: 1, viewValue: '1 Day'},
    {value: 2, viewValue: '2 Days'},
    {value: 3, viewValue: '3 Days'},
  ];

  getTotalCost() {
    return this.transactions.map(t => t.cost).reduce((acc, value) => acc + value, 0);
  }
}
