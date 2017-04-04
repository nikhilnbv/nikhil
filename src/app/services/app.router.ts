import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../admin/app.admin.component';
import { LoginComponent } from '../app.login.component';
import { AuthGuard } from '../guard/authGuard';


export const routes: Routes = [

    { path: 'admin', component: AdminComponent, canActivate: [AuthGuard] },    
    { path: 'login', component: LoginComponent },    
    { path: '', component: LoginComponent },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);