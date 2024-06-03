import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
  selector: '[pkmnBorderCard]',
  standalone: true
})
export class BorderCardDirective {
  private initialColor: string = '#f5f5f5';
  private defaultColor: string = "#009688";
  private defaultHeight: number = 350;
  

  constructor(private el: ElementRef) { 
    this.setHeight(this.defaultHeight);
    this.setBorder(this.initialColor);
    this.setBack(this.initialColor)
  }
  @Input('pkmnBorderCard') borderColor: string;
  @Input() background: string;

  @HostListener('mouseenter') onMouseEnter() {
    this.setBorder(this.borderColor || this.defaultColor);
    this.setBack(this.background  || this.defaultColor)
  }
  @HostListener('mouseleave') onMouseLeave() { 
    this.setBorder(this.initialColor);
    this.setBack(this.initialColor)
  }

  private setHeight(height: number) {
    this.el.nativeElement.style.height = `${height}px`;
  }
  private setBorder(color: string) {
    let border = `solid 4px ${color}`;
    this.el.nativeElement.style.border = border;
  }
  private setBack(color: string) {
    let backgroundColor = `${color}`;
    this.el.nativeElement.style.backgroundColor = backgroundColor;
  }
}
