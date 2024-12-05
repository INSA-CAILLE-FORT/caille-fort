import {QuestionModel} from './Question.model';

export class TileModel {
  constructor(public id: number,
              public name: string,
              public subtitle: string,
              public description: string,
              public benefits: string,
              public dysfunctions: string,
              public questions: QuestionModel[]) {
    this.id = id;
    this.name = name;
    this.subtitle = subtitle;
    this.description = description;
    this.benefits = benefits;
    this.dysfunctions = dysfunctions;
    this.questions = questions;
  }
}
