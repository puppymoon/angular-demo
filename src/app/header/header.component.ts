import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ArticlesService } from '../articles.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private articlesService: ArticlesService) { }

  keyword = '';

  highlightTitle = false;

  fontSize = 24;

  @Output() keywordChange = new EventEmitter<string>();

  ngOnInit(): void {
  }

  search(value: string) {

    this.articlesService.searchArticle(this.keyword);

    // this.keywordChange.emit(this.keyword);

    // console.log(value);
    // this.keyword = 'remove';
    // this.highlightTitle = !this.highlightTitle;
    // this.fontSize++;
  }

}
