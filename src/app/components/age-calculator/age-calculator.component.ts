// src/app/components/age-calculator/age-calculator.component.ts
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ApiService } from '../../services/api.service';
import { ProgressSpinnerModule } from 'primeng/progressspinner';

@Component({
  selector: 'app-age-calculator',
  standalone: true,
  imports: [CommonModule, FormsModule,ProgressSpinnerModule],
  templateUrl: './age-calculator.component.html',
  styleUrls: ['./age-calculator.component.scss']
})
export class AgeCalculatorComponent {
  dateOfBirth: string = '';
  ageResult?: number;
  errorMessage?: string;
  isLoading: boolean = false;

  constructor(private apiService: ApiService) {}

  calculateAge(): void {
    this.errorMessage = undefined;
    this.ageResult = undefined;

    // Appel au service pour calculer l'âge
    this.apiService.calculateAge(this.dateOfBirth).subscribe({
      next: (age: number) => {
        this.ageResult = age;
      },
      error: (error) => {
        console.error('Error calculating age', error);
        this.errorMessage = 'Une erreur est survenue lors du calcul de l\'âge.';
      }
    });
  }
}
