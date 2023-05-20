import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TableDataComponent } from './table-data/table-data.component';

const routes: Routes = [
  {path:'table',component:TableDataComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
