import { Routes } from '@angular/router';
import { ExpenseComponent } from './expense/expense.component';
import { BudgetComponent } from './budget/budget.component';
import { CategoriesComponent } from './categories/categories.component';
import { ChartsComponent } from './charts/charts.component';

export const routes: Routes = [
    {path :'', component:ExpenseComponent},
    {path:'budget', component:BudgetComponent},
    {path:'categories',component:CategoriesComponent},
    {path:'charts',component:ChartsComponent}
   
];
