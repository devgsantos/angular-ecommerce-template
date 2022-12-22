import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-featured-cards',
  templateUrl: './featured-cards.component.html',
  styleUrls: ['./featured-cards.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class FeaturedCardsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
