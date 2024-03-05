import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {
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
