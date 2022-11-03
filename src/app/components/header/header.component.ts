import { AfterViewInit, Component, Input, OnInit } from '@angular/core';
declare var anime: any;

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, AfterViewInit {

  constructor() { }

  @Input() header: any;

  selectedText: string = "Conseil et stratégie digitale";

  menus = [
    {
      label: "Services",
      path: ""
    },
    {
      label: "Notre équpe",
      path: ""
    },
    {
      label: "Nous-Contacter",
      path: ""
    }
  ]

  servicesText: string[] = [
    "Application web métier",
    "Application Mobile",
    "Conseil et stratégie digitale",

    "UX/UI Design",
  ]

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    anime.timeline({loop: true})
  .add({
    targets: '.c2 .word',
    scale: [14,1],
    opacity: [0,1],
    easing: "easeOutCirc",
    duration: 800,
    delay: (el:any, i:any) => 800 * i
  }).add({
    targets: '.c2',
    opacity: 0,
    duration: 1000,
    easing: "easeOutExpo",
    delay: 1000
  });


  }




}
