import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PageTitleService {
  private title$: BehaviorSubject<string> = new BehaviorSubject<string>('');

  constructor(private readonly title: Title) {}

  getTitle(): Observable<string> {
    return this.title$.asObservable();
  }

  setTitle(title: string): void {
    this.title$.next(title);
    this.title.setTitle(title);
  }
}
