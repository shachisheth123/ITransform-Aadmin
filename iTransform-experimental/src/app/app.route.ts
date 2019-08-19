import { Routes } from '@angular/router';
import { WelcomeComponent } from './welcome.component';
import { LoginComponent } from './user/login/login.component';
import { AdminWelcomeComponent } from './admin/admin-welcome/admin-welcome.component';
import { AdminComponent } from './admin/admin.component';

export const appRoute: Routes = [
    {path : 'admin' , component:AdminComponent},
    {path: '', component: WelcomeComponent},
    {path: 'login', component: LoginComponent},

];
