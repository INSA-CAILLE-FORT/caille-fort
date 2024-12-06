import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import response from '../utils/response.json';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'https://localhost:8083/api/points'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getGame(id:number): Observable<any> {
    // return this.http.get<any>(`${this.apiUrl}/${id}`);
    return of(response); // Retourne une observable contenant les données JSON
  }

  // parseGame(data: any): GameModel {
  //   // TODO
  //   return null;
  // }
}
