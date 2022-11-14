import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  public selected: any;

  menus: any[] = [
    {
      label: "Acceuil",
      path: ""
    },
    {
      label: "Qui sommes-nous",
      path: ""
    },
    {
      label: "Services",
      path: ""
    },
    {
      label: "Contacts",
      path: ""
    }
  ]

  ngOnInit(): void {
  }



@HostListener("window:scroll", []) onWindowScroll() {
  // do some stuff here when the window is scrolled
  const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;

    if(verticalOffset > 5.0){
     return true;
    }else{
      return false;
    }
}

}
