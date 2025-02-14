import { NgModule } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {VERSION as MAT_VERSION, MatNativeDateModule} from '@angular/material/core';

@NgModule({
    declarations: [
    ],
    imports: [
      MatCardModule,MatInputModule,MatFormFieldModule,MatNativeDateModule
    ],
    providers: [],
    bootstrap: []
  })

export class importModule {}