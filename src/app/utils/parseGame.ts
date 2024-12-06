import { GameModel } from '../Models/Game.model';
import { OrganModel } from '../Models/Organ.model';
import { OceanPartModel } from '../Models/OceanPart.model';
import { QuestionModel } from '../Models/Question.model';

export function parseGame(data: any): GameModel {
  // Parse les questions pour un organ ou une partie de l'océan
  console.log(data);
  const parseQuestions = (questions: any[]): QuestionModel[] => {
    return questions.map((q) => {
      return new QuestionModel(
        q.id,
        q.text,
        q.status,
        q.description,
        q.correctAnswer,
        q.incorrectAnswers
      );
    });
  };

  // Parse l'organ
  const organ = new OrganModel(
    data.organ.id,
    data.organ.name,
    parseQuestions(data.organ.questions)
  );

  // Parse la partie de l'océan
  const oceanPart = new OceanPartModel(
    data.oceanPart.id,
    data.oceanPart.name,
    parseQuestions(data.oceanPart.questions)
  );

  // Retourne l'objet GameModel
  return new GameModel(data.id, data.name, organ, oceanPart);
}
