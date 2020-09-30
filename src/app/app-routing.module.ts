import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { AllBooksComponent } from './all-books/all-books.component';
import { SearchComponent } from './search/search.component';
import { AccountComponent } from './account/account.component'
import { UpdateBookComponent } from './update-book/update-book.component';

const routes: Routes = [
  {path:'',redirectTo:'account',pathMatch:'full'},
  { path: 'account', component: AccountComponent },
  {path:'search',component:SearchComponent},
  {path:'all-books',component:AllBooksComponent},
  {path:'add-book',component:AddBookComponent},
  {path:'update-book',component:UpdateBookComponent},
  {path:'**',component:AllBooksComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
