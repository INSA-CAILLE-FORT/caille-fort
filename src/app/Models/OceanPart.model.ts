import {QuestionModel} from './Question.model';

export class OceanPartModel {
  constructor(public id: number,
              public name: string,
              public questions: QuestionModel[]) {
    this.id = id;
    this.name = name;
    this.questions = questions;
  }
}
