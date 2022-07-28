import { Component } from '@angular/core';
import { PageTitleService } from 'src/app/components/page-title/page-title.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  constructor(private readonly pageTitleService: PageTitleService) {
    this.pageTitleService.setTitle('Homea');
  }
}
