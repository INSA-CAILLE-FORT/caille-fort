import {Component, Input, Output, EventEmitter} from '@angular/core';
import {NgClass, NgForOf, NgIf} from '@angular/common';
import {QuestionModel} from '../../Models/Question.model';
import {TileContentComponent} from '../tile-content/tile-content.component';

@Component({
  selector: 'app-quizz',
  standalone: true,
  imports: [
    NgIf,
    NgForOf,
    NgClass,
    TileContentComponent
  ],
  templateUrl: './quizz.component.html',
  styleUrl: './quizz.component.scss'
})
export class QuizzComponent {
  @Input() isOcean!: boolean; // Définit si le contenu est un quizz
  @Input() questions!: QuestionModel[]; // Modèle de question
  @Output() quizFinishedEvent = new EventEmitter<boolean>();
  currentQuestion = 1; // Numéro de la question actuelle
  totalQuestions = 3;
  userAnswer: string = '';
  currentQuestionIndex = 0;
  quizzFinished = false;
  displayNextQuestion = true;
  isCorrect = false; // Définit si la réponse est correcte
  isAnswered = false;
  feedbackMessage = '';
  linkMessage = '';

  ngOnInit() {
    if (this.isOcean) {
      this.totalQuestions = 6;
    }
  }



  get getCurrentQuestion(): QuestionModel {
    return this.questions[this.currentQuestionIndex];
  }

  getQuestionType(question: QuestionModel): string {
    if (question.correctAnswer.toLowerCase() == "true" || question.correctAnswer.toLowerCase() == "false" || question.correctAnswer.toLowerCase() == "vrai" || question.correctAnswer.toLowerCase() == "faux") {
    return "true/false";
    } else if (question.correctAnswer.toLowerCase() == "") {
    return "GPT";
    } else {
    return "QCM";
    }
  }

  getOptions(question: QuestionModel): string[] {
    console.log('Question :', question);
    if (this.getQuestionType(question) === 'QCM') {
      const options = [...question.incorrectAnswers];
      const correctAnswerIndex = Math.floor(Math.random() * (options.length + 1));
      options.splice(correctAnswerIndex, 0, question.correctAnswer);
      return options.map((o) => typeof o === 'string' ? o : o.answer);
    } else {
      return [];
    }
  }

  answer(response: string): void {
    if (this.getQuestionType(this.questions[this.currentQuestionIndex]) === 'QCM' || this.getQuestionType(this.questions[this.currentQuestionIndex]) === 'true/false') {
      this.isCorrect = response.toLowerCase().trim() === this.getCurrentQuestion.correctAnswer.toString().trim().toLowerCase();
    } else {
      this.isCorrect = response === this.getCurrentQuestion.correctAnswer;
    }


    // Met à jour l'état et le message
    this.isAnswered = true;
    this.feedbackMessage = this.isCorrect ? 'Bonne réponse !' : 'Mauvaise réponse !';
    this.linkMessage = this.isCorrect ? 'Question suivante' : 'Réessayer';


    console.log('Réponse utilisateur :', response, ' | Correcte :', this.isCorrect);
    // Si la réponse est correcte, passe à la question suivante
    if (this.isCorrect && this.currentQuestionIndex+1 < this.totalQuestions) {
      this.currentQuestion++;
      this.currentQuestionIndex++;
      this.userAnswer = ''; // Réinitialise la réponse de l'utilisateur
    } else if (this.isCorrect) {
      this.displayNextQuestion = false;
      setTimeout(() => {
        this.quizzFinished = true;
        this.quizFinishedEvent.emit(true);
      }, 1000);
    }
  }

  nextQuestion() {
    this.isCorrect = false;
    this.isAnswered=false;
  }
}
