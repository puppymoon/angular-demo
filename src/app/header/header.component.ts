import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  keyword = '';

  highlightTitle = false;

  fontSize = 24;

  ngOnInit(): void {
  }

  search(value: string) {
    console.log(value);
    this.keyword = 'remove';
    this.highlightTitle = !this.highlightTitle;
    this.fontSize++;
  }

}
