import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-budget',
  standalone: true,
  imports: [ RouterOutlet, RouterLink,MatButtonModule,MatFormFieldModule,MatInputModule],
  templateUrl: './budget.component.html',
  styleUrl: './budget.component.css'
})
export class BudgetComponent {

}
