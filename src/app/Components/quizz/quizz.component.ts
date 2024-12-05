import { Component } from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {
  currentQuestion = 1;
  totalQuestions = 3;
  userAnswer: string = '';

  isAnswered = false;
  feedbackMessage = '';

  question = {
    text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit...',
    type: 'truefalse', // Peut être 'truefalse', 'multiple', ou 'text'
    options: ['Option 1', 'Option 2', 'Option 3'], // Utilisé uniquement pour 'multiple'
    correctAnswer: true // La réponse correcte (ou un tableau pour 'multiple')
  };

  isCorrect = false; // Définit si la réponse est correcte

  answer(response: any): void {
    if (this.question.type === 'text') {
      this.isCorrect = response.trim().toLowerCase() === this.question.correctAnswer.toString().trim().toLowerCase();
    } else {
      this.isCorrect = response === this.question.correctAnswer;
    }

    // Met à jour l'état et le message
    this.isAnswered = true;
    this.feedbackMessage = this.isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse !';

    console.log('Réponse utilisateur :', response, ' | Correcte :', this.isCorrect);
  }

}
