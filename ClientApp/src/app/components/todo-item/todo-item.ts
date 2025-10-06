import { Component, input, signal } from '@angular/core';
import { ToDoItem } from '../../models/todoitem.model';

@Component({
  selector: '[app-todo-item]',
  imports: [],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent {
    todoItem = input.required<ToDoItem>();
    isOverdue = signal(false);
    item = signal(new ToDoItem);

    ngOnInit() {
      let newItem : ToDoItem =  new ToDoItem(
        this.todoItem().id, 
        this.todoItem().title, 
        this.todoItem().creationDate, 
        this.todoItem().completeBy, 
        this.todoItem().completedDate, 
        this.todoItem().isCompleted);

      this.item.set(newItem);

       const today = new Date();
       if (this.todoItem().completeBy) {
           const completeByDate = this.todoItem().completeBy;
           this.isOverdue.set(!this.todoItem().isCompleted && (completeByDate! < today));
       }
   }
}