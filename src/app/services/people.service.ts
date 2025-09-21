import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person, PeopleResponse } from '../models/person.model';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  private apiUrl = 'http://localhost:5000/api/people';

  constructor(private http: HttpClient) { }

  getPeople(page: number = 1, pageSize: number = 10): Observable<PeopleResponse> {
    let params = new HttpParams()
      .set('page', page.toString())
      .set('pageSize', pageSize.toString());

    return this.http.get<PeopleResponse>(this.apiUrl, { params });
  }

  getPersonByCpf(cpf: string): Observable<Person> {
    return this.http.get<Person>(`${this.apiUrl}/${cpf}`);
  }

  createPerson(person: Person): Observable<Person> {
    return this.http.post<Person>(this.apiUrl, person);
  }

  updatePerson(cpf: string, person: Person): Observable<Person> {
    return this.http.put<Person>(`${this.apiUrl}/${cpf}`, person);
  }

  deletePerson(cpf: string): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${cpf}`);
  }
}
