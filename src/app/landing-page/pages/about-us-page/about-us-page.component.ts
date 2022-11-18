import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us-page',
  templateUrl: './about-us-page.component.html',
  styleUrls: ['./about-us-page.component.scss']
})
export class AboutUsPageComponent implements OnInit {

  constructor() { }

  team =   {
    "title": "Notre Equipe",
    "subTitle": "Des jeunes passionnés et expérimentés",
    "people": [
      {
        "id": 1,
        "name": "Alioue Touré",
        "role": "Ingénieur d'Affaire",
        "img": "assets/images/alioune.png",
        "desc": "",
        "links": [
          {
            "label": "LinkedIn",
            "url": ""
          }
        ]
      },
      {
        "id": 2,
        "name": "Papa Babacar Ngor Senghor",
        "role": "IT Manager",
        "img": "assets/images/senghor.png",
        "desc": "",
        "links": [
          {
            "label": "LinkedIn",
            "url": ""
          }
        ]
      },
      {
        "id": 3,
        "name": "Abdoulaye Wade",
        "role": "Chef de Projet",
        "img": "assets/images/wade.png",
        "desc": "",
        "links": [
          {
            "label": "LinkedIn",
            "url": ""
          }
        ]
      },
      {
        "id": 4,
        "name": "Mansour Yade",
        "role": "Chef de Projet",
        "img": "assets/images/mansour.png",
        "desc": "",
        "links": [
          {
            "label": "LinkedIn",
            "url": ""
          }
        ]
      },
      {
        "id": 5,
        "name": "Gora",
        "role": "Chef de Projet",
        "img": "assets/images/gora.png",
        "desc": "",
        "links": [
          {
            "label": "LinkedIn",
            "url": ""
          }
        ]
      }
    ]

  }

  ngOnInit(): void {
  }

}
