import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints
} from '@angular/cdk/layout';

@Injectable({
  providedIn: 'root'
})
export class ResponsivenessService {

  Breakpoints = Breakpoints;
  currentBreakpoint: string = '';
  breakpointLevel!: number;

  constructor(
    private breakpointObserver: BreakpointObserver
  ) { }

  getBreakpoints() {
    this.breakpointObserver.observe([
      Breakpoints.XSmall,
      Breakpoints.Small,
      Breakpoints.Medium,
      Breakpoints.Large,
      Breakpoints.XLarge,
    ]).subscribe(result => {
      if (result.matches) {
        if (result.breakpoints[Breakpoints.XSmall]) {
          this.currentBreakpoint = 'xsmall';
          this.breakpointLevel = 0;
        }
        if (result.breakpoints[Breakpoints.Small]) {
          this.currentBreakpoint = 'small';
          this.breakpointLevel = 1;
        }
        if (result.breakpoints[Breakpoints.Medium]) {
          this.currentBreakpoint = 'medium';
          this.breakpointLevel = 2;
        }
        if (result.breakpoints[Breakpoints.Large]) {
          this.currentBreakpoint = 'large';
          this.breakpointLevel = 3;
        }
        if (result.breakpoints[Breakpoints.XLarge]) {
          this.currentBreakpoint = 'xlarge';
          this.breakpointLevel = 4;
        }
        console.log(this.currentBreakpoint)
      }
    });
  }
}
