import { NgModule } from '@angular/core';
import {
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule

} from '@angular/material';

const MATERIAL_MODULES = [
  MatSidenavModule,
  MatListModule,
  MatToolbarModule,
  MatButtonModule,
  MatIconModule
];

@NgModule({
  imports: MATERIAL_MODULES,
  exports: MATERIAL_MODULES
})

export class AppMaterialModule { }