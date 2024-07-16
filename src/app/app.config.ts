import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideClientHydration } from '@angular/platform-browser';
import { ExpenseComponent } from './expense/expense.component';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import {MatSelectModule} from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideClientHydration(),ExpenseComponent, provideAnimationsAsync(),
     MatToolbarModule, MatButtonModule,MatSelectModule,MatInputModule,MatFormFieldModule]
};
