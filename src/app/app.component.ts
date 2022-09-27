import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'coup2pouce';

  year: string = new Date().getFullYear().toString();

  nav =  {
    "brand": {
      "labe": "CouP2Pouce",
      "logo": "assets/nav/logo.jpg"
    },
    "links": [
      {
        "label": "Qui Sommes-Nous",
        "path": "about"
      },
      {
        "label": "Services",
        "path": "services"
      },
      {
        "label": "Technologies",
        "path": "technos"
      },
      {
         "label": "L'équipe",
         "path": "team"
      },
      {
        "label": "Contatez-Nous",
        "path": "contact"
      }
    ]
};

  footer =  {
    "brand": "Coup2pouce",
    "utilLinks": [
      {
        "label": "Services",
        "url": ""
      },
      {
        "label": "Technologies",
        "url": ""
      },
      {
        "label": "L'équipe",
        "url": ""
      }
    ],
    "services": {
      "label": "Nos Services",
      "items": [
        {
          "label": "Developpement Web",
          "path": ""

        },
        {
          "label": "Developpement Mobile",
          "path": ""

        },
        {
          "label": "DevOps",
          "path": ""

        },
        {
          "label": "Design",
          "path": ""

        }
      ]
    },
    "contacts": {
      "email1": "coup2pouce@gmail.com",
      "email2": "senghor.pape912@hotmail.com",
      "fax1": "+33 000 00 00",
      "fax2": "+33 000 00 00",
      "phone1": "+221 77 744 36 63",
      "phone2": "+221 77 744 36 63",
      "socialLinks":[
        {
          "label": "LinkedIn",
          "icon":  "fa fa-linkedin",
          "url":   ""
        },
        {
          "label": "Facebook",
          "icon":  "fa fa-facebook",
          "url":   ""
        },
        {
          "label": "Twitter",
          "icon":  "fa fa-twitter",
          "url":   ""
        }
      ]
    },
    "copyRight": ` Coup2pouce © ${this.year} tous droits réservés powered by`


  }
}
