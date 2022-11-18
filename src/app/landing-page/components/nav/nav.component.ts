import { MenuService } from './../../shared/services/menu.service';
import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor(private ms: MenuService) { }

  public selected: any;

  menus: any[] = [
    {
      label: "Acceuil",
      path: ""
    },
    {
      label: "Qui sommes-nous",
      path: "qui-sommes-nous"
    },
    {
      label: "Services",
      path: "nos-services"
    },
    {
      label: "Le blog",
      path: "blog"
    },
    {
      label: "Contacts",
      path: "constacts-nous"
    }
  ]

  ngOnInit(): void {
    this.ms.opened.subscribe(v => console.log(v))

  }

  open(){
    this.ms.opened.next(true)
  }

@HostListener("window:scroll", []) onWindowScroll() {
  // do some stuff here when the window is scrolled
  const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;

        console.log(verticalOffset)
    if(verticalOffset > 5.0){

     return true;
    }else{
      return false;
    }
}

}
