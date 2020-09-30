import { Component, OnInit } from '@angular/core';
import {BookServiceService} from '../book-service.service';
@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  bookname:String='';
  book:any;
  constructor(private service:BookServiceService) { }

  ngOnInit(): void {
  }
  public searchBook(){
    let response = this.service.getBookByName(this.bookname);
    response.subscribe(data=>(this.book = data));
  }
 
}
