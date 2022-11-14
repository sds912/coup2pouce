import { Article } from './../../../shared/models/article';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-blog-new-articles',
  templateUrl: './blog-new-articles.component.html',
  styleUrls: ['./blog-new-articles.component.scss']
})
export class BlogNewArticlesComponent implements OnInit {

  articles: Article[] = [
    {
      uid: "",
      title: "",
      content: "",
      createdAt: "",
      author: {
        role: "",
        username: ""
      }
    },
    {
      uid: "",
      title: "",
      content: "",
      createdAt: "",
      author: {
        role: "",
        username: ""
      }
    },
    {
      uid: "",
      title: "",
      content: "",
      createdAt: "",
      author: {
        role: "",
        username: ""
      }
    }
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
