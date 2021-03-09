import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CourseComponent } from './components/course/course.component';
import { SettingsComponent } from './components/settings/settings.component';
import { CommonModule } from '@angular/common';
import { AuthenticationComponent } from './components/authentication/authentication.component';
import { AuthGuard } from './guards/auth.guard';
import { ReceiverAuthenticationComponent } from './components/receiver-authentication/receiver-authentication.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: AuthenticationComponent
  },
  {
    path: 'receiverLogin',
    component: ReceiverAuthenticationComponent
  },
  {
    path: 'home',
    component: HomeComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'course',
    component: CourseComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: 'settings',
    component: SettingsComponent,
    canActivate: [ AuthGuard ]
  },
  {
    path: '**',
    component: AuthenticationComponent
  },
  {
    path: 'task-info',
    loadChildren: () => import('./pages/task-info/task-info.module').then( m => m.TaskInfoPageModule)
  },
  {
    path: 'task-accept',
    loadChildren: () => import('./pages/task-accept/task-accept.module').then( m => m.TaskAcceptPageModule)
  },
  {
    path: 'task-finish',
    loadChildren: () => import('./pages/task-finish/task-finish.module').then( m => m.TaskFinishPageModule)
  }



];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [
    RouterModule,
    CommonModule
  ]
})
export class AppRoutingModule {}
