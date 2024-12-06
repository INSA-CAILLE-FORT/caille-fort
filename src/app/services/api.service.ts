// src/app/services/api.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private baseUrl = 'https://api.insa-caille-fort.fr/api';

  constructor(private http: HttpClient) { }

  public calculateAge(dateOfBirth: string): Observable<number> {
    return this.http.post<number>(`${this.baseUrl}/age`, { dateOfBirth });
  }
}
