import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import { of } from 'rxjs/observable/of';

import { Hero } from './hero';
import { HEROES } from './mock-heroes';
import { MessageService } from './message.service';

import { HttpClient } from '@angular/common/http';

@Injectable()
export class HeroService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }
    
    /** GET heroes from the server */
    //getHeroes (): Observable<Hero[]> {
      //return this.http.get<Hero[]>(this.heroesUrl)
    //}
    
    
    getHeroes(): Observable<Hero[]> {
    // Todo: send the message _after_ fetching the heroes
    this.messageService.add('HeroService: fetched heroes');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero> {
    // Todo: send the message _after_ fetching the hero
    this.messageService.add(`HeroService: fetched heroes id=${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}