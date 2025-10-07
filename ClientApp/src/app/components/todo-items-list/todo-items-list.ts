import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Subscription } from 'rxjs';
import { Repository } from '../../services/repository';
import { TodoItemComponent } from "../todo-item/todo-item";
import { SharedItemEditService } from 'src/app/services/shared-edit.service';
import { ToDoItem } from 'src/app/models/todoitem.model';

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

    todoitemList: ToDoItem[] = [];

    constructor() { }                     

    ngOnInit() {

      this.itemEventSubscription = this.editService.itemEditEvent$.subscribe(id => {
        this.editService.emitListEvent(id);
      });

      this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe((itemList) => {
        itemList.forEach(item => {
          const today = new Date();
          if (item.dueBy) {
            const completeByDate = item.dueBy;
            item.isOverdue = (!item.isCompleted && (completeByDate! < today));
          }
        });
        console.log("Items received in List: " + JSON.stringify(itemList));
        this.todoitemList = itemList;
      });

      this.repo.getToDoItems();
    }

    ngOnDestroy() {
        this.todoitemsListChanged.unsubscribe();
        this.itemEventSubscription.unsubscribe();
    }
}
