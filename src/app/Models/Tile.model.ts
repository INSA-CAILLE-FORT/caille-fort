import { Question } from './Question.model';
export class Tile {

  
    constructor(public id: number,
                public title: string,
                public subtitle: string,
                public description: string,
                public benefit:string,
                public dysfunctionment: string,
                public score: number,
                public question: Question | null | undefined) {
                    this.id = id,
                    this.title = title,
                    this.subtitle = subtitle,
                    this.description = description,
                    this.benefit = benefit,
                    this.dysfunctionment = dysfunctionment,
                    this.score = score,
                    this.question = question
                }

    updateScore(score: number): void {
        this.score = score;
        }
    
    updateQuestion(question: Question): void {
        this.question = question;
        }
  
  }