import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskAcceptPage } from './task-accept.page';

const routes: Routes = [
  {
    path: '',
    component: TaskAcceptPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskAcceptPageRoutingModule {}
