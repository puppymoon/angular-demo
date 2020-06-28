import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterArticle'
})
export class FilterArticlePipe implements PipeTransform {

  transform(articles: Article[], keyword?: any): any {
    if (articles && keyword) {
      return articles.filter(article => article.title.indexOf(keyword) !== -1);
    } else {
      return articles;
    }
  }

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
