import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  @Input() about: any;
  @Input() image!: string ;

  constructor() { }

  ngOnInit(): void {
  }

}
