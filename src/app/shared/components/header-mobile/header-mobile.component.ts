import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'app-header-mobile',
  templateUrl: './header-mobile.component.html',
  styleUrls: ['./header-mobile.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class HeaderMobileComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
