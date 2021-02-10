import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TaskFinishPageRoutingModule } from './task-finish-routing.module';

import { TaskFinishPage } from './task-finish.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TaskFinishPageRoutingModule
  ],
  declarations: [TaskFinishPage]
})
export class TaskFinishPageModule {}
