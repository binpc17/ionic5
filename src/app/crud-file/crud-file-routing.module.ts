import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudFilePage } from './crud-file.page';

const routes: Routes = [
  {
    path: '',
    component: CrudFilePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudFilePageRoutingModule {}
