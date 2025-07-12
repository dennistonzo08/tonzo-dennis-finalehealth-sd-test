import { Routes } from '@angular/router';
import { Dashboard } from '../components/dashboard/dashboard';
import { PatientsPage } from '../components/patients-page/patients-page';

export const routes: Routes = [
    {
        path: '',
        component: Dashboard
    },
    {
        path: 'patients',
        component: PatientsPage
    }
];
