import { Component, OnDestroy, OnInit, inject, input, signal } from '@angular/core';
import { CommonModule, DatePipe, formatDate } from '@angular/common';
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
    private todoitemChanged: Subscription = new Subscription();

    todoItem = input.required<ToDoItem>();
    isOverdue = signal(false);
    item = signal(new ToDoItem);
    isEditMode: boolean = false;

    ngOnInit() {
      let newItem : ToDoItem =  new ToDoItem(
        this.todoItem().id, 
        this.todoItem().title, 
        this.todoItem().creationDate, 
        this.todoItem().dueBy, 
        this.todoItem().completedDate, 
        this.todoItem().isCompleted);

      this.item.set(newItem);

      this.todoitemChanged = this.repo.todoitemChanged.subscribe((updatedItem) => {
        if (updatedItem.id === this.todoItem().id) {
          console.log('Received updated todoitem:', updatedItem); 
          this.item.set(updatedItem);
        }
      })

      const today = new Date();
      if (this.todoItem().dueBy) {
          const completeByDate = this.todoItem().dueBy;
          this.isOverdue.set(!this.todoItem().isCompleted && (completeByDate! < today));
      }

      this.listEventSubscription = this.editService.itemlistEditEvent$.subscribe(message => {
        if (message !== this.todoItem().id) {
          this.isEditMode = false;
          this.item.set(this.todoItem());
        }
      });
   }  
   setItemComplete() {
       let updatedItem = new ToDoItem(this.item().id, 
          this.item().title, 
          this.item().creationDate, 
          this.item().dueBy, 
          new Date(formatDate(new Date(), 'd/M/yyyy', 'en-AU')), 
          true);
          
       this.repo.replaceToDoItem(updatedItem);
   }

   setEditMode() {
        this.editService.emitItemEvent(this.todoItem().id!);
        this.isEditMode = true;
   }
   
   cancelEdit() {
       this.isEditMode = false;
       this.item.set(this.todoItem());
   }

   saveChanges() {
       this.isEditMode = false;
        this.repo.replaceToDoItem(this.item());
   }

   deleteItem() {
       this.repo.deleteToDoItem(this.item().id!);
   }

  ngOnDestroy(): void {
    this.listEventSubscription.unsubscribe();
    this.todoitemChanged.unsubscribe();
  }
}
