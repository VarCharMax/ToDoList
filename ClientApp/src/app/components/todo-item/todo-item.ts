import { Component, inject, input, signal } from '@angular/core';
import { ToDoItem } from '../../models/todoitem.model';
import { Repository } from 'src/app/services/repository';
import { CommonModule, DatePipe} from '@angular/common';
@Component({
  selector: '[app-todo-item]',
  imports: [CommonModule,DatePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent {
    private repo: Repository = inject(Repository);
    todoItem = input.required<ToDoItem>();
    isOverdue = signal(false);
    item = signal(new ToDoItem);
    isEditMode: boolean = false;

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
   setEditMode() {
       this.isEditMode = true;
   }
   cancelEdit() {
       this.isEditMode = false;
       this.item.set(this.todoItem());
   }

   saveChanges() {
       this.isEditMode = false;
        this.repo.replaceToDoItem(this.item());
        this.repo.getToDoItems();
   }

   deleteItem() {
       this.repo.deleteToDoItem(this.item().id!);
       this.repo.getToDoItems();
   }
}