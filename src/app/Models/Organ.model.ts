import {QuestionModel} from './Question.model';

export class OrganModel {
  constructor(public id: number,
              public name: string,
              public questions: QuestionModel[]) {
    this.id = id;
    this.name = name;
    this.questions = questions;
  }
}
