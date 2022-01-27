import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudCreatePage } from './crud-create.page';

const routes: Routes = [
  {
    path: '',
    component: CrudCreatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudCreatePageRoutingModule {}
