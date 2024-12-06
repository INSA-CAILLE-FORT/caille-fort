import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private apiUrl = 'https://api.insa-caille-fort.fr/api/points'; // Remplacez par l'URL de votre API

  constructor(private http: HttpClient) {}

  getGame(id:number): Observable<any> {

    return this.http.get<any>(`${this.apiUrl}/${id}`, {responseType: 'json'});
    // return of(response); // Retourne une observable contenant les données JSON
  }

  // parseGame(data: any): GameModel {
  //   // TODO
  //   return null;
  // }
}
