import {QuestionModel} from './Question.model';

export class OrganModel {
  constructor(public id: number,
              public name: string,
              public questions: QuestionModel[],
              public image: string | null,
  ) {
    this.id = id;
    this.name = name;
    this.questions = questions;
    this.image = image;
  }
}
