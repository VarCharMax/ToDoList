import { Component, input } from '@angular/core';
import { TodoItemInfo } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
   todoItem = input.required<TodoItemInfo>();
}
