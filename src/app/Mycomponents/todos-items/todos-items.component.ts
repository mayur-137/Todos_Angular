import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import {Todo} from "../../Todos";

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
  @Input() i:number;
  @Input() todo : Todo;
  @Output() todoDelete : EventEmitter<Todo> = new EventEmitter();
  @Output() todoCheckBox : EventEmitter<Todo> = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  deleteTodo(todo: Todo){
    this.todoDelete.emit(todo);
  }

  onCheckBox(todo: Todo) {
    this.todoCheckBox.emit(todo)
  }
}

