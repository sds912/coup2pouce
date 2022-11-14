import { Component, OnInit } from '@angular/core';
import { OwlOptions } from 'ngx-owl-carousel-o';

@Component({
  selector: 'app-temonials',
  templateUrl: './temonials.component.html',
  styleUrls: ['./temonials.component.scss']
})
export class TemonialsComponent implements OnInit {
  customOptions: OwlOptions = {
    autoplay: true,
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: true,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
