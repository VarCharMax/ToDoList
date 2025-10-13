import { Component, OnDestroy, OnInit, ViewEncapsulation, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../../services/repository';
import { TodoItemComponent } from "../todo-item/todo-item";
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { ToDoItem } from 'src/app/models/todoitem.model';

@Component({
  selector: 'app-todo-items-list',
  imports: [TodoItemComponent],
  templateUrl: './todo-items-list.html',
  styleUrl: './todo-items-list.css',
   encapsulation: ViewEncapsulation.None
})
export class TodoItemsList implements OnInit, OnDestroy {
    private todoitemsListChanged: Subscription = new Subscription();
    private todoitemChanged: Subscription = new Subscription();
    private itemEventSubscription: Subscription = new Subscription();
    private repo: Repository = inject(Repository);
    private editService: SharedItemEditService = inject(SharedItemEditService);

    todoitemList: ToDoItem[] = [];

    constructor() { }                     

    ngOnInit() {

      this.itemEventSubscription = this.editService.itemEditEvent$.subscribe(id => {
        this.editService.emitListEvent(id);
      });
      
      this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe((itemList) => {
        this.todoitemList = itemList.DBSort();
      });

      this.todoitemChanged = this.repo.todoitemChanged.subscribe((item) => {
        let updateItemIndex: number = this.todoitemList.findIndex((i) => i.id == item.id);
        this.todoitemList[updateItemIndex] = item;
        this.todoitemList = this.todoitemList.DBSort(); // Item status might have changed.
      });

      this.repo.getToDoItems();
    }

    ngOnDestroy() {
        this.todoitemsListChanged.unsubscribe();
        this.todoitemChanged.unsubscribe();
        this.itemEventSubscription.unsubscribe();
    }
}
