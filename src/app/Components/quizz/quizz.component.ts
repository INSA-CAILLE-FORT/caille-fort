import { Component } from '@angular/core';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {
  currentQuestion = 1;
  totalQuestions = 3;
  userAnswer: string = '';

  question = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    type: 'text', // Peut être 'truefalse', 'multiple', ou 'text'
    options: ['Option 1', 'Option 2', 'Option 3', 'Option 4'], // Utilisé uniquement pour 'multiple'
  };

  answer(response: any): void {
    console.log('Réponse utilisateur :', response);
    // Ajoutez ici la logique pour gérer la réponse
  }
}
