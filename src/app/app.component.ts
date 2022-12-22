import { Component } from '@angular/core';
import { ResponsivenessService } from './shared/services/responsiveness.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  constructor (
    public reponsiveness: ResponsivenessService
  ) {  
    this.reponsiveness.getBreakpoints()
  }

  title = 'makeup-shop-app';
}
