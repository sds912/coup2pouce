import { Component, HostListener, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.scss']
})
export class NavComponent implements OnInit {

  constructor() { }

  public selected: string = "";
  @Input() dark: boolean = false;
  public colored: boolean = false;

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
      label: "Job",
      path: "job"
    },
    {
      label: "Contacts",
      path: "constacts-nous"
    }
  ]

  ngOnInit(): void {
    //this.ms.opened.subscribe(v => console.log(v))

  }


@HostListener("window:scroll", []) onWindowScroll() {
  // do some stuff here when the window is scrolled
  const verticalOffset = window.pageYOffset
        || document.documentElement.scrollTop
        || document.body.scrollTop || 0;

    if(verticalOffset > 5.0){
     this.colored = true;
    }else{
      this.colored = false;
    }
}

}
