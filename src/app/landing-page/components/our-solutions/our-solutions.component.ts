import { OwlOptions } from 'ngx-owl-carousel-o';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-solutions',
  templateUrl: './our-solutions.component.html',
  styleUrls: ['./our-solutions.component.scss']
})
export class OurSolutionsComponent implements OnInit {

  customOptions: OwlOptions = {
    autoplay: true,
    //autoplayTimeout: 250,
    autoplayHoverPause: true,
    loop: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    navSpeed: 700,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 1
      }
    }
  }


  imageObject:any = [

{
  thumbImage: 'assets/solutions/globalrh.gif',
  alt: 'Spring Framework',
  order: 1
},
{
  thumbImage: 'assets/solutions/cisco.gif',
  alt: 'Angular',
  order: 2

},
{
  thumbImage: 'assets/solutions/safelogistic.gif',
  alt: 'Flutter',
  order: 3

},
{
  thumbImage: 'assets/solutions/segalsine.gif',
  alt: 'Java',
  order: 4

},
{
  thumbImage: 'assets/solutions/teralma.gif',
  alt: 'Jenkins',
  order: 5

}

];


  constructor() { }

  ngOnInit(): void {
  }

}
