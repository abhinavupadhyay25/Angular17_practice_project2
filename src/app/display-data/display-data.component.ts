import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit, inject } from '@angular/core';

@Component({
  selector: 'app-display-data',
  standalone: true,
  imports: [HttpClientModule],
  templateUrl: './display-data.component.html',
  styleUrl: './display-data.component.css',
})
export class DisplayDataComponent implements OnInit {
  httpClient = inject(HttpClient);
  posts: any[] = [];

  ngOnInit(): void {
    this.fetchData();
  }
  fetchData() {
    this.httpClient
      .get('https://jsonplaceholder.typicode.com/posts')
      .subscribe((data: any) => {
        //console.log(data);
        this.posts = data;
      });
  }
}
