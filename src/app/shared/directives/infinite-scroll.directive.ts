import { Directive, ElementRef, EventEmitter, OnInit, Input, Output, HostListener } from '@angular/core';

@Directive({
  selector: '[appInfiniteScroll]',
})
export class InfiniteScrollDirective implements OnInit {

  @Output() infiniteScroll: EventEmitter<void> = new EventEmitter<void>();

  @Input() threshold = 120;

  @Input() actualPage!: number;

  @Input() totalPages!: number;

  private window!: Window;

  constructor(private el: ElementRef) {}

  ngOnInit(): void {
    // save window object for type safety
    this.window = window;
  }

  @HostListener('window:scroll', ['$event.target'])
  windowScrollEvent(event: KeyboardEvent) {
    // height of whole window page
    const heightOfWholePage = this.window.document.documentElement.scrollHeight;

    // how big in pixels the element is
    const heightOfElement = this.el.nativeElement.scrollHeight;

    // currently scrolled Y position
    const currentScrolledY = this.window.scrollY;

    // height of opened window - shrinks if console is opened
    const innerHeight = this.window.innerHeight;

   /**
    * the area between the start of the page and when this element is visible
    * in the parent component
    */
    const spaceOfElementAndPage = heightOfWholePage - heightOfElement;

    // calculated whether we are near the end
    const scrollToBottom =
      heightOfElement - innerHeight - currentScrolledY + spaceOfElementAndPage;

    // if the user is near end
    if (this.totalPages) {
      if (this.actualPage < this.totalPages) {
        if (scrollToBottom < this.threshold) {
          this.infiniteScroll.emit();
        }
      }
    } else {
      if (scrollToBottom < this.threshold) {
        this.infiniteScroll.emit();
      }
    }
    
  }

}