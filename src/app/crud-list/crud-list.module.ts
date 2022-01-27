import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudListPageRoutingModule } from './crud-list-routing.module';

import { CrudListPage } from './crud-list.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudListPageRoutingModule
  ],
  declarations: [CrudListPage]
})
export class CrudListPageModule {}
