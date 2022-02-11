import { Component, OnInit, Input } from '@angular/core';
import {Todo} from "../../Todos";

@Component({
  selector: 'app-todos-items',
  templateUrl: './todos-items.component.html',
  styleUrls: ['./todos-items.component.css']
})
export class TodosItemsComponent implements OnInit {
  @Input() todo : Todo
  constructor() { }

  ngOnInit(): void {
  }

}
