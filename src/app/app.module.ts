import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { TodosComponent } from './Mycomponents/todos/todos.component';
import { AddTodosComponent } from './Mycomponents/add-todos/add-todos.component';
import { AboutComponent } from './Mycomponents/about/about.component';
import { TodosItemsComponent } from './Mycomponents/todos-items/todos-items.component';

@NgModule({
  declarations: [
    AppComponent,
    TodosComponent,
    AddTodosComponent,
    AboutComponent,
    TodosItemsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
