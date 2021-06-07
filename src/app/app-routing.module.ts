import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'test', loadChildren:  () => import('./test/test.module').then(m => m.TestModule)},
  { path: 'main', loadChildren:  () => import('./main/main.module').then(m => m.MainModule)},
  { path: '**', redirectTo: 'main'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
