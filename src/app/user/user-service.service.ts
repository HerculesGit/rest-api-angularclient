import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; // GET, POST, PUT...

// https://angular.io/guide/observables techiniques for events handling, asynchonouns programming
import { Observable } from 'rxjs';
import { User } from './user';

/**
 * [description]
 * Toda a funcionalidade necessária para consumir a API do controlador REST que implementamos anteriormente 
 */

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private usersUrl: string;

  constructor(private http: HttpClient) {
    // talvez precise do '/api'
    this.usersUrl = 'http://localhost:8080/api/users'
  }

  public findAll(): Observable<User[]> {
    return this.http.get<User[]>(this.usersUrl);
  }

  public save(user: User) {
    return this.http.post<User>(this.usersUrl, user);
  }

}
