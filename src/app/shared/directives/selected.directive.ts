import { HostBinding } from '@angular/core';
import { OnChanges, SimpleChanges } from '@angular/core';
import { Directive, Input } from '@angular/core';

@Directive({
  selector: '[appSelected]',
})
export class SelectedDirective implements OnChanges {
  @Input() public appSelected!: boolean;
  @HostBinding('style.backgroundColor') private backgroundColor!: string;
  @HostBinding('style.fontWeight') private fontWeight!: string;
  @HostBinding('style.color') private color!: string;
  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    if (this.appSelected) {
      this.backgroundColor = 'var(--primary)';
      this.color = 'white';
      this.fontWeight = '500';
    } else {
      this.backgroundColor = 'white';
      this.color = 'var(--text-regular)';
      this.fontWeight = '400';
    }
  }
}
