export class QuestionModel {
  constructor(public id: number,
              public text: string,
              public status: string,
              public description: string,
              public correctAnswer: string,
              public incorrectAnswers: string[] | IncorrectAnswer[]) {
    this.id = id;
    this.text = text;
    this.status = status;
    this.description = description;
    this.correctAnswer = correctAnswer;
    this.incorrectAnswers = incorrectAnswers;
  }
}

class IncorrectAnswer {
  constructor(public id: number,
              public answer: string) {
    this.id = id;
    this.answer = answer;
  }
}
