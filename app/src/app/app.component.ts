import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'app';

  name = '';

  message = '';

  constructor(private http: HttpClient) {}

  onSubmit() {
    this.http
      .get(`/api/greeting`, { params: { name: this.name } })
      .subscribe((data: any) => {
        console.log(data);
        this.message = data.content;
      });
  }
}
