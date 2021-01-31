import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskAcceptPageRoutingModule } from './task-accept-routing.module';

import { TaskAcceptPage } from './task-accept.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskAcceptPageRoutingModule
  ],
  declarations: [TaskAcceptPage]
})
export class TaskAcceptPageModule {}
