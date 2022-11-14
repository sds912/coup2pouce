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
  thumbImage: 'assets/technos/spring.png',
  alt: 'Spring Framework',
  order: 1
},
{
  thumbImage: 'assets/technos/angular.png',
  alt: 'Angular',
  order: 2

},
{
  thumbImage: 'assets/technos/flutter.png',
  alt: 'Flutter',
  order: 3

},
{
  thumbImage: 'assets/technos/java.png',
  alt: 'Java',
  order: 4

},
{
  thumbImage: 'assets/technos/jenkins.png',
  alt: 'Jenkins',
  order: 5

},
{
  thumbImage: 'assets/technos/kotlin.png',
  alt: 'Kotlin',
  order: 6

},
{
  thumbImage: 'assets/technos/laravel.png',
  alt: 'Laravel',
  order: 7

},
{
  thumbImage: 'assets/technos/maven.png',
  alt: 'Maven',
  order: 8

},
{
  thumbImage: 'assets/technos/mongo.png',
  alt: 'Mongo',
  order: 9

},
{
  thumbImage: 'assets/technos/nodejs.png',
  alt: 'NodeJS',
  order: 10

},
{
  thumbImage: 'assets/technos/react.png',
  alt: 'React',
  order: 11

},
{
  thumbImage: 'assets/technos/vue.png',
  alt: 'Vue',
  order: 12

}

];

  @Input() techno: any;

  ngOnInit(): void {
  }

}
