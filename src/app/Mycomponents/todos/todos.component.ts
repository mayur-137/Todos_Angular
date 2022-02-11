import { Component, OnInit } from '@angular/core';
import {Todo} from "../../Todos";

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos: Todo[]
  constructor() {
    this.todos =[
      {
        title:'this is title1',
        desc:'this is desc1',
        active:true
      },{
        title:'this is title2',
        desc:'this is desc2',
        active:true
      },{
        title:'this is title3',
        desc:'this is desc3',
        active:true
      },
    ]
  }

  ngOnInit(): void {
  }

}
