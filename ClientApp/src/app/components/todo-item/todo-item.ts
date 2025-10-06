import { Component, input, signal } from '@angular/core';
import { TodoItemInfo } from '../../models/todo-item';

@Component({
  selector: 'app-todo-item',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItem {
   todoItem = input.required<TodoItemInfo>();
    isOverdue = signal(false);

   ngOnInit() {
       const today = new Date();
       if (this.todoItem().completeBy) {
           const completeByDate = this.todoItem().completeBy;
           this.isOverdue.set(!this.todoItem().isCompleted && (completeByDate! < today));
       }
   }
}