import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CrudSearchPage } from './crud-search.page';

const routes: Routes = [
  {
    path: '',
    component: CrudSearchPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CrudSearchPageRoutingModule {}
