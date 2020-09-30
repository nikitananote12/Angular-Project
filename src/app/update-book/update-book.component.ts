import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Router} from "@angular/router";
import {Book} from '../book';
@Component({
  selector: 'app-update-book',
  templateUrl: './update-book.component.html',
  styleUrls: ['./update-book.component.css']
})
export class UpdateBookComponent implements OnInit {
  bookid : number;
  book : Book;
  message :any;
  constructor(private service:BookServiceService,private router:Router) { }

  ngOnInit(): void {
  }
  public onClose(){
    this.router.navigate(['all-books']);
  }
  public updateUser(){
    let response = this.service.updateUser(this.book);
    response.subscribe(data=>{console.log(data)});

  }
}
