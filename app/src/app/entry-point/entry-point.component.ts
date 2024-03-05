import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-entry-point',
  standalone: true,
  imports: [],
  templateUrl: './entry-point.component.html',
  styleUrl: './entry-point.component.scss',
})
export class EntryPointComponent {
  private $entry: string = '';

  @Input()
  set entry(v: string) {
    this.$entry = v;
  }

  get entry(): string {
    return this.$entry;
  }
}
