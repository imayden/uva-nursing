import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class WordpressService {
  private apiUrl = 'https://mediumblue-wallaby-407426.hostingersite.com/wp-json/wp/v2';  // WordPress API Basic URL

  constructor(private http: HttpClient) {}

  // Get all posts
  getPosts(): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts`);
  }

  // Get single post
  getPost(id: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/posts/${id}`);
  }

  // Get Pages
  getPages(): Observable<any> {
    return this.http.get(`${this.apiUrl}/pages`);
  }

  // Get Page by slug
  getPageBySlug(slug: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/pages?slug=${slug}`);
  }
}
