import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CrudFilePageRoutingModule } from './crud-file-routing.module';

import { CrudFilePage } from './crud-file.page';
import {FileSizePipe} from "../services/file-size.pipe";

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CrudFilePageRoutingModule
  ],
  declarations: [CrudFilePage,FileSizePipe]
})
export class CrudFilePageModule {}
