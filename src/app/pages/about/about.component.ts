import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/components/page-title/page-title.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss'],
})
export class AboutComponent {
  constructor(private readonly pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle('About');
  }
}
