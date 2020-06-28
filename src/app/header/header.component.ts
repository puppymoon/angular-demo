import { Component, OnInit, Output, EventEmitter } from '@angular/core';

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

  @Output() keywordChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  search(value: string) {

    this.keywordChange.emit(this.keyword);
    // console.log(value);
    // this.keyword = 'remove';
    // this.highlightTitle = !this.highlightTitle;
    // this.fontSize++;
  }

}
