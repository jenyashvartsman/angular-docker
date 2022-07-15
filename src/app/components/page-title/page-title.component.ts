import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PageTitleService } from './page-title.service';

@Component({
  selector: 'app-page-title',
  templateUrl: './page-title.component.html',
  styleUrls: ['./page-title.component.scss'],
})
export class PageTitleComponent {
  title$: Observable<string>;

  constructor(private readonly pageTitleService: PageTitleService) {
    this.title$ = this.pageTitleService.getTitle();
  }
}
