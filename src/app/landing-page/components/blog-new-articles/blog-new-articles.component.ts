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
      title: "Créer un API REST avec spring boot",
      content: "Une API REST (également connue sous le nom d'API RESTful) est une interface de programmation d'application (API ou API Web) qui se conforme aux contraintes du style architectural REST et permet une interaction avec les services Web RESTful.",
      cover: "https://www.devxperiences.com/hoachuju/2022/05/start-coding-spring-boot-restapu_transparent.png",
      lang: "https://miro.medium.com/max/856/1*O68LbDvD5Dcsnez73M7v4Q.png",
      createdAt: "",
      author: {
        role: "",
        username: ""
      }
    },
    {
      uid: "",
      title: "Comprendre l'achitecture microservice",
      content: "Les microservices, également connus sous le nom d'architecture microservice, sont un style architectural qui structure une application comme une collection de services",
      cover: "https://learn.microsoft.com/en-us/azure/architecture/includes/images/microservices-logical.png",
      lang: "https://etc-eusair-network.eu/images/icone/metodo.png",
      createdAt: "",
      author: {
        role: "",
        username: ""
      }
    },
    {
      uid: "",
      title: "Sécuriser une application avec spring security",
      content: "En plus de fournir diverses options d'authentification et d'autorisation intégrées, Spring Security nous permet de personnaliser notre processus d'authentification autant que nous le souhaitons.",
      cover: "https://huongdanjava.com/wp-content/uploads/2021/05/spring-security-logo-1.png",
      lang:"https://pbs.twimg.com/profile_images/1235983944463585281/AWCKLiJh_400x400.png",
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
