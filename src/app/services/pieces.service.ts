import { Injectable } from '@angular/core';
import { Piece } from '../models/piece.model';
import { Observable, Subject, map, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PiecesService {
  private url: string = 'https://carnavaldle-back.onrender.com/api/v1/pieces';

  private _refresh$: Subject<void> = new Subject();
  get refresh$(): Observable<void> {
    return this._refresh$;
  }

  constructor(private http: HttpClient) {}

  private splitLyricsInQuotes(lyrics: string) {
    return lyrics.split('\n');
  }

  private sortRandomAndQuitSpaces(quotes: string[]): string[] {
    return quotes.map((quote) => quote.trim()).sort(() => Math.random() - 0.5);
  }

  public createPiece(piece: Piece): Observable<Piece> {
    return this.http
      .post<Piece>(`${this.url}/`, piece)
      .pipe(tap(() => this._refresh$.next()));
  }

  public getRandomPiece(): Observable<Piece> {
    return this.http.get<Piece>(`${this.url}/random`).pipe(
      map((piece: Piece) => {
        piece.quotes = this.sortRandomAndQuitSpaces(
          this.splitLyricsInQuotes(piece.lyrics)
        );
        return piece;
      })
    );
  }
}
