import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {

  list: any[];

  keyword: string;

  constructor(private httpClient: HttpClient) { }

  loadArticles() {
    this.httpClient.get('https://conduit.productionready.io/api/articles').subscribe((response: RootObject) => {
      this.list = response.articles;
    });
  }

  getArticles(): Observable<any[]> {
    return this.httpClient.get('https://conduit.productionready.io/api/articles')
      .pipe(map((response: RootObject) => response.articles));
  }

  searchArticle(keyword: string) {
    this.keyword = keyword;
  }

  // searchArticle($event) {
  //   if ($event) {
  //     this.list = this.list.filter(article => article.title.indexOf($event) !== -1);
  //   } else {
  //     this.list = this.list;
  //   }
  // }
}

interface RootObject {
  articles: Article[];
  articlesCount: number;
}

interface Article {
  title: string;
  slug: string;
  body: string;
  createdAt: string;
  updatedAt: string;
  tagList: string[];
  description: string;
  author: Author;
  favorited: boolean;
  favoritesCount: number;
}

interface Author {
  username: string;
  bio?: string;
  image: string;
  following: boolean;
}
