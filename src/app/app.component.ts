import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { BooksCardComponent } from './books/books-card/books-card.component';
import { COURSES } from './db-data';
import { CourseInterface } from './model/course';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, BooksCardComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {

  courses: CourseInterface[] = COURSES;
  
  title = 'app';

  book1 = COURSES[0];
  book2 = COURSES[1];
  book3 = COURSES[2];

 ngOnInit(): void {
    
  }

}
