import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { AgeCalculatorComponent } from './components/age-calculator/age-calculator.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, AgeCalculatorComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'caille-fort';
}
