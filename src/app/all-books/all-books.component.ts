import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Router} from "@angular/router";
@Component({
  selector: 'app-all-books',
  templateUrl: './all-books.component.html',
  styleUrls: ['./all-books.component.css']
})
export class AllBooksComponent implements OnInit {
  book:any;
  bookid:number;
  constructor(private service:BookServiceService,private router:Router) { }

  ngOnInit(): void {
    let response = this.service.getbooks();
    response.subscribe(data=>this.book=data);
    console.log("got the response");
    console.log(response);
    this.service.getbooks().subscribe(params=>{
      console.log(params);
    })
  }
  public removeBook(bookid){
    let response = this.service.deleteUser(bookid);
    response.subscribe(data=>(this.book = data));
    console.log(response);
    console.log(this.book);
  }
  public updateBook(bookid){
    this.router.navigate(['update-book'],{queryParams:bookid});
  }
}
