import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudCreatePageRoutingModule } from './crud-create-routing.module';

import { CrudCreatePage } from './crud-create.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CrudCreatePageRoutingModule
  ],
  declarations: [CrudCreatePage]
})
export class CrudCreatePageModule {}
