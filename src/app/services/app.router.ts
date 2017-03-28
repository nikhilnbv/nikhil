import { Routes, RouterModule } from '@angular/router';

import { AdminComponent } from '../app.admin.component';
import { LoginComponent } from '../app.login.component';

export const routes: Routes = [

    { path: 'admin', component: AdminComponent },    
    { path: '', component: LoginComponent },    
    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(routes);