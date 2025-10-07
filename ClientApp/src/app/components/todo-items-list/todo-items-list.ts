import { Component, EventEmitter, inject, OnDestroy, OnInit } from '@angular/core';
import { Repository } from '../../services/repository';
import { Subscription } from 'rxjs';
import { TodoItemInfo } from '../../models/todo-item';
import { TodoItemComponent } from "../todo-item/todo-item";
import { SharedItemEditService } from 'src/app/services/shared-edit.service';

@Component({
  selector: 'app-todo-items-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-items-list.html',
  styleUrl: './todo-items-list.css'
})
export class TodoItemsList implements OnInit, OnDestroy {
    private todoitemsListChanged: Subscription = new Subscription();
    private repo: Repository = inject(Repository);
    private editService: SharedItemEditService = inject(SharedItemEditService);
    private itemEventSubscription: Subscription = new Subscription();

    todoitemList: TodoItemInfo[] = [];

    constructor() { }                     

    ngOnInit() {
         this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe((itemList) => {
            this.todoitemList = itemList;
      });

      this.repo.getToDoItems();
    }

    /*
    handleItemEditChange(id: number) {
      console.log('Child received event from child:', id);
      this.editService.emitListEvent(id);
   }
    */

    ngOnDestroy() {
        this.todoitemsListChanged.unsubscribe();
        this.itemEventSubscription.unsubscribe();
    }
}
