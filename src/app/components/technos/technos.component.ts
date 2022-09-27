import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss']
})
export class TechnosComponent implements OnInit {

  constructor() { }

  imageObject: Array<object> = [

{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 1',
  order: 1
},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 2',
  order: 2

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 3',
  order: 3

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 4',
  order: 4

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 5',
  order: 5

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 6',
  order: 6

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 7',
  order: 7

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 8',
  order: 8

},
{
  thumbImage: 'https://dz2cdn1.dzone.com/storage/temp/12434118-spring-boot-logo.png',
  alt: 'alt of image 9',
  order: 9

}

];

  @Input() techno: any;

  ngOnInit(): void {
  }

}
