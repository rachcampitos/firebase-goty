import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { Game } from '../interfaces/interfaces';
import { catchError, of, tap } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GameService {
  private games: Game[] = [];

  constructor(private http: HttpClient) {}

  getNominados() {
    if (this.games.length > 0) {
      return of(this.games);
    } else {
      return this.http
        .get<Game[]>(`${environment.url}/goty`)
        .pipe(tap((games) => (this.games = games)));
    }
  }

  gameVote(id: string) {
    return this.http.post(`${environment.url}/goty/${id}`, {}).pipe(
      catchError((err) => {
        return of(err.error);
      })
    );
  }
}
