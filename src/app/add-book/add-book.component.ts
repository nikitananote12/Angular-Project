import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
import {Book} from '../book';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {
  book : Book = new Book(0,'',0,'');
  message :any;
  constructor(private service : BookServiceService) { }

  ngOnInit(): void {
  }
  public addingBook(){
    let response = this.service.addBook(this.book);
    response.subscribe(data=>{
      this.message = data;
      console.log("adding data"+data);
    })
  }
}
