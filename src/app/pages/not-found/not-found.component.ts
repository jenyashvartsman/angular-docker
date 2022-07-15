import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/components/page-title/page-title.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss'],
})
export class NotFoundComponent {
  constructor(private readonly pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle('404');
  }
}
