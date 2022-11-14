import { AppDataService } from './../../../shared/services/app-data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private appService: AppDataService) { }

  public appData: any;

  public loading: boolean = false;

  ngOnInit(): void {
   this.initAppData();
  }

  initAppData(){
    this.loading = true;
    this.appService.loadAppJSONData().subscribe(res => {
      console.log(res)
      this.appData = res;
      this.loading = false;
    });
}

}
