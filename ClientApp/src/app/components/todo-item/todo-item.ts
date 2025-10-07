import { Component, inject, input, OnDestroy, OnInit, output, signal } from '@angular/core';
import { CommonModule, DatePipe} from '@angular/common';
import { Subscription } from 'rxjs';
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { ToDoItem } from '../../models/todoitem.model';
import { Repository } from 'src/app/services/repository';

@Component({
  selector: '[app-todo-item]',
  imports: [CommonModule,DatePipe],
  templateUrl: './todo-item.html',
  styleUrl: './todo-item.css'
})
export class TodoItemComponent implements OnInit, OnDestroy {
    private repo: Repository = inject(Repository);
    private editService: SharedItemEditService = inject(SharedItemEditService);
    private listEventSubscription: Subscription = new Subscription();

    todoItem = input.required<ToDoItem>();
    isOverdue = signal(false);
    item = signal(new ToDoItem);
    isEditMode: boolean = false;
    onItemEditMode = output<number>();

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

      this.listEventSubscription = this.editService.itemlistEditEvent$.subscribe(message => {
        console.log('Child received event from parent:', message);
        if (message !== this.todoItem().id) {
          this.isEditMode = false;
          this.item.set(this.todoItem());
        }
      });
   }

   setEditMode() {
        this.onItemEditMode.emit(this.todoItem().id!);
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

  ngOnDestroy(): void {
    this.listEventSubscription.unsubscribe();
  }
}