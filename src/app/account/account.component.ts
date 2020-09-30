import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css']
})
export class AccountComponent implements OnInit {
  username:String;
  password:String;
  invalidText:String;
  invalid:Boolean;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }
  
  adminLogin(){
    if(this.username == 'admin' && this.password == 'admin'){
      console.log('Welcome');
      this.router.navigate(['all-books']);
      this.invalid=false;
    }
    else{
      this.invalid=true;
      this.invalidText="*Please enter valid Username or password";
    }
  }

}
