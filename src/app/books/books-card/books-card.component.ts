import { Component, Input, OnInit } from '@angular/core';

import { COURSES } from '../../db-data';
import { CourseInterface } from '../../model/course';

@Component({
  selector: 'app-books-card',
  standalone: true,
  imports: [],
  templateUrl: './books-card.component.html',
  styleUrl: './books-card.component.css',
})
export class BooksCardComponent implements OnInit {
  @Input() course: CourseInterface | null = null;
  // title: string;

  constructor() {}
  ngOnInit(): void {
    console.log(this.course);
  }
}
