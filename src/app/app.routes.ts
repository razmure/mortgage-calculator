import { Routes } from '@angular/router';
import { CalculatorWizardComponent } from './pages/calculator-wizard/calculator-wizard.component';

export const routes: Routes = [
    { path: 'calculator', component: CalculatorWizardComponent },
    { path: '',   redirectTo: '/calculator', pathMatch: 'full' },
];
