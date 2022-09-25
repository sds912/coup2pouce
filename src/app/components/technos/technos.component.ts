import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-technos',
  templateUrl: './technos.component.html',
  styleUrls: ['./technos.component.scss']
})
export class TechnosComponent implements OnInit {

  constructor() { }

  @Input() techno: any;

  ngOnInit(): void {
  }

}
