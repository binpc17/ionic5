import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudUpdatePageRoutingModule } from './crud-update-routing.module';

import { CrudUpdatePage } from './crud-update.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,ReactiveFormsModule,
    CrudUpdatePageRoutingModule
  ],
  declarations: [CrudUpdatePage]
})
export class CrudUpdatePageModule {}
