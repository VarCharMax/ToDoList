import { Component, OnDestroy, OnInit, inject, signal } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../../services/repository';
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

    todoitemList = signal<TodoItemInfo[]>(new Array<TodoItemInfo>());

    constructor() { }                     

    ngOnInit() {

      this.itemEventSubscription = this.editService.itemEditEvent$.subscribe(id => {
        this.editService.emitListEvent(id);
      });

      this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe((itemList) => {
        console.log('Received updated todoitems list:', itemList);
        this.todoitemList.set(itemList);
      });

      this.repo.getToDoItems();
    }

    ngOnDestroy() {
        this.todoitemsListChanged.unsubscribe();
        this.itemEventSubscription.unsubscribe();
    }
}
