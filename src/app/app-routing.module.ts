import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./tabs/tabs.module').then(m => m.TabsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'crud-create',
    loadChildren: () => import('./crud-create/crud-create.module').then( m => m.CrudCreatePageModule)
  },
  {
    path: 'crud-update/:id',
    loadChildren: () => import('./crud-update/crud-update.module').then( m => m.CrudUpdatePageModule)
  },
  {
    path: 'crud-list',
    loadChildren: () => import('./crud-list/crud-list.module').then( m => m.CrudListPageModule)
  },
  {
    path: 'crud-file',
    loadChildren: () => import('./crud-file/crud-file.module').then( m => m.CrudFilePageModule)
  },
  {
    path: 'crud-search',
    loadChildren: () => import('./crud-search/crud-search.module').then( m => m.CrudSearchPageModule)
  }
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
