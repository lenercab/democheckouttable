import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableComponent } from './table/table.component';
import { TablaCheckboxComponent } from './tabla-checkbox/tabla-checkbox.component';

const routes: Routes = [
  { path: '', component: TablaCheckboxComponent },
  { path: 'table', component: TableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
