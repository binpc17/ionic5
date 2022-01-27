import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudSearchPageRoutingModule } from './crud-search-routing.module';

import { CrudSearchPage } from './crud-search.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudSearchPageRoutingModule
  ],
  declarations: [CrudSearchPage]
})
export class CrudSearchPageModule {}
