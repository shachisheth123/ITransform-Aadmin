import { Routes } from '@angular/router';
import { AdminWelcomeComponent } from './admin-welcome/admin-welcome.component';
import { AdminNewCourseComponent } from './admin-newcourse/admin-newcourse.component';
import { AdminNewChapterComponent } from './admin-newChapter/admin-newChapter.component';
import { AdminNewModuleComponent } from './admin-newModule/admin-newModule.component';

export const adminRoute: Routes = [
    { path: 'adminwelcome', component: AdminWelcomeComponent },
    { path: 'addcourse', component: AdminNewCourseComponent },
    { path: 'addchapter', component: AdminNewChapterComponent },
    { path: 'addmodule', component: AdminNewModuleComponent }
];
