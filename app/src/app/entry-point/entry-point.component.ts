import { HttpClient } from '@angular/common/http';
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
    this.retrieveContext();
  }

  get entry(): string {
    return this.$entry;
  }

  context = '';

  constructor(private http: HttpClient) {}

  retrieveContext() {
    const search = window.location.search;
    this.http
      .get(`/api/context/${this.entry}${search}`)
      .subscribe((data: any) => {
        this.context = data.content;
      });
  }
}
