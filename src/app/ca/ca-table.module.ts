import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CaTableComponent } from './ca-table/ca-table.component';
import { CaPaginationComponent } from './ca-pagination/ca-pagination.component';
import { MainTableComponent } from './main-table/main-table.component';

@NgModule({
  declarations: [CaTableComponent, CaPaginationComponent, MainTableComponent],
  exports: [CaTableComponent, MainTableComponent],
  imports: [
    CommonModule
  ]
})
export class CaTableModule { }
