import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor() { }

  @Input() footer: any;


  copyRight=`  © ${new Date().getFullYear()} coup2pouce tous droits réservés`


  ngOnInit(): void {
  }

}
