import {QuestionModel} from './Question.model';

export class TileModel {
  constructor(public id: number,
              public name: string,
              public subtitle: string,
              public image: string | null,
              public questions: QuestionModel[]) {
    this.id = id;
    this.name = name;
    this.subtitle = subtitle;
    this.image = image;
    this.questions = questions;
  }
}
