import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  @Input() service: any;

  services: any[] = [
    {
      title: "Développement Web",
      desc: "Nous offrons plus que des compétences en codage. Notre expérience vous garantie des solutions web afficaces.",
      icon: "assets/services/web.png"
    },
    {
      title: "Développement Mobile",
      desc: "Des solutions mobiles immersives qui offres un expérience utilisateur exceptionnelle  ",
      icon: "assets/services/mobile-dev.png"
    },
    {
      title: "UI/XU Design",
      desc: "Une expérience utilisateur fluide qui rend vos solutions plus accessibles avec un design captivant",
      icon: "assets/services/design.png"
    },
    {
      title: "QA & Testing",
      desc: "Faites appel à nos experts pour effectuer des tests et des audits complets en plusieurs étapes de votre logiciel.",
      icon: "assets/services/testing.png"
    },
    {
      title: "Consultance IT",
      desc: "Nous vous aidons à définir une stratégie digitale pour mieux s’adapter aux réalités du marché",
      icon: "assets/services/consulting.png"
    },
    {
      title: "Equipe Dédiée",
      desc: "Au cours de la dernière décennie, nos clients ont réussi en tirant parti du processus de construction et de motivation d'Intellectsoft.",
      icon: "assets/services/team.png"
    }
  ]

  ngOnInit(): void {
  }

}
