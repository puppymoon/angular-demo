import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  keyword = '555555666666';

  ngOnInit(): void {
  }

  search(value: string){
    alert(value);
    this.keyword = 'remove';
  }

}
