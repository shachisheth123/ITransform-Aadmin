import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { adminRoute } from './admin.route';
import { CourseModule } from '../course/course.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserModule } from '../user/user.module';
import { RouterModule } from '@angular/router';
import { AdminService } from './admin.service';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminNewCourseComponent } from './admin-newcourse/admin-newcourse.component';
import { AdminNewChapterComponent } from './admin-newChapter/admin-newChapter.component';
import {  AdminNewModuleComponent } from './admin-newModule/admin-newModule.component';
import { AdminComponent } from './admin.component';


@NgModule({
  declarations: [
    AdminWelcomeComponent,
    AdminNewCourseComponent,
    AdminNewChapterComponent,
    AdminNewModuleComponent,
    AdminComponent

  ],
  imports: [
    BrowserModule,
    CourseModule,
    FormsModule,
    CommonModule,
    BrowserAnimationsModule,
    UserModule,
    ReactiveFormsModule,
    RouterModule.forChild(adminRoute)

  ],
  providers: [
    AdminService
  ],
  exports: [
    AdminWelcomeComponent,
    AdminNewCourseComponent,
    AdminNewChapterComponent,
    AdminNewModuleComponent,
    AdminComponent

  ]
})
export class AdminModule { }
