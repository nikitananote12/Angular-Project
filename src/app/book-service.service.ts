import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Book } from './book';

@Injectable({
  providedIn: 'root'
})
export class BookServiceService {

  constructor(private http:HttpClient) { }
  public addBook(book1){
    return this.http.post("http://localhost:8089/books",book1,{responseType:'text' as 'json'});
  }
  public getbooks(){
    return this.http.get("http://localhost:8089/books");
  }
  public getBookByName(bookname){
    return this.http.get("http://localhost:8089/search/"+bookname);
  }
  public deleteUser(bookid){
    return this.http.delete("http://localhost:8089/books/"+bookid);
  }
  public updateUser(book){
    return this.http.put("http://localhost:8089/books/"+book.bookid,book);
  }
 
}
