import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Question } from '../models/Question.model';

@Injectable({
  providedIn: 'root',
})
export class QuestionService {
    getQuestion(): Observable<Question>{
        // TODO : link to back and remove useless parts
        question = new Question (
        id = 1
        text = "Combien as-tu de poumons"
        status = "Description"
        answers = ["1","2","3","4"]
        )
        return question
    }

}