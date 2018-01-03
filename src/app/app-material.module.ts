import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule
} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class AppMaterialModule { }