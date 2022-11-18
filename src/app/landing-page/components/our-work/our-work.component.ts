import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-work',
  templateUrl: './our-work.component.html',
  styleUrls: ['./our-work.component.scss']
})
export class OurWorkComponent implements OnInit {

  constructor() { }
  selected: number = 1;
  works: any[] = [
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-1.jpg",

    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-2.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-3.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-4.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-5.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-6.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-7.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-8.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-9.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-10.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-11.jpg"
    },
    {
      label: "Logo",
      desc: "",
      image: "assets/works/design-12.jpg"
    }
  ]
  ngOnInit(): void {
  }

}
