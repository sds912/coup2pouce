import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-how-we-work',
  templateUrl: './how-we-work.component.html',
  styleUrls: ['./how-we-work.component.scss']
})
export class HowWeWorkComponent implements OnInit {

  @Input() workprocess: any;

  constructor() { }

  ngOnInit(): void {
  }

}
