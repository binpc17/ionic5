import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudUpdatePage } from './crud-update.page';

const routes: Routes = [
  {
    path: '',
    component: CrudUpdatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudUpdatePageRoutingModule {}
