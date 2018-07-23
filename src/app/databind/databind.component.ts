import { Component, OnInit } from '@angular/core';

import { DatabindService } from '../services/databind.service';

@Component({
  selector: 'app-databind',
  templateUrl: './databind.component.html',
  styleUrls: ['./databind.component.css']
})
export class DatabindComponent implements OnInit {

  fullArray: any = [];
  searchResults: any = [];
  openOnly: boolean = false;

  constructor(private databindservice: DatabindService) {

    this.databindservice.fetchData()
      .subscribe(
        (fulljson) => {
          this.searchResults = fulljson;
          this.fullArray = fulljson;
          console.log(this.searchResults)
        },
        (error) => {
          console.log(error)
        }
      );

  }

  toggleItems(id: number) {
    // this.openOnly = !this.openOnly;
console.log(id)
    if (id == 1) {
      this.searchResults = this.fullArray.filter((item) => {
        return item.isOpen == true;
      });
    } else {
      this.searchResults = this.fullArray.filter((item) => {
        return item.isOpen == false;
      });
    }
  }

  ngOnInit() {
  }

}
