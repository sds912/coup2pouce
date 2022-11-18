import { MenuService } from './../../shared/services/menu.service';
import { Component, OnInit } from '@angular/core';
import { window } from 'rxjs';

@Component({
  selector: 'app-side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss']
})
export class SideNavComponent implements OnInit {

  constructor(private ms: MenuService) {

   }

  ngOnInit(): void {
    this.ms.opened.subscribe(v => console.log("0"))
  }

   openNav() {

    document.getElementById("mySidenav")!.style.width = "250px !important";
  }

  /* Set the width of the side navigation to 0 */
   closeNav() {
    document.getElementById("mySidenav")!.style.width = "0";
  }
}
