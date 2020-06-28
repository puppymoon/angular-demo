import { Component, Input, OnInit } from '@angular/core';
import { ArticlesService } from './articles.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

  title = 'angular-demo';

  conduit = 'conduit-Test';

  paragraph = 'A place to share your <u>knowledge.</u>';

  list$: Observable<any[]>;
  // get list() {
  //   return this.articlesService.list;
  // }

  constructor(private articlesService: ArticlesService) {
    // this.list = this.articlesService.list;
  }
  ngOnInit(): void {
    this.list$ = this.articlesService.getArticles();
  }


}
