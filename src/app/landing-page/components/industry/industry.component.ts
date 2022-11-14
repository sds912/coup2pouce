import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss']
})
export class IndustryComponent implements OnInit {

  constructor() { }

  @Input() industry: any;

  ngOnInit(): void {

  }

}
