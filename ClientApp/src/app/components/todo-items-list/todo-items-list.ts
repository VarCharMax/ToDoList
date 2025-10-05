import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Repository } from '../../services/repository';
import { Subscription } from 'rxjs';
import { TodoItemInfo } from '../../models/todo-item';
import { TodoItem } from "../todo-item/todo-item";

@Component({
  selector: 'app-todo-items-list',
  imports: [TodoItem],
  templateUrl: './todo-items-list.html',
  styleUrl: './todo-items-list.css'
})
export class TodoItemsList implements OnInit, OnDestroy {
     
    private todoitemsListChanged: Subscription = new Subscription();
      private repo: Repository = inject(Repository);
    
    todoitemList: TodoItemInfo[] = [];

    constructor() { }                     

    ngOnInit() { 
         this.todoitemsListChanged = this.repo.todoitemsChanged.subscribe((t) => {
          this.todoitemList = t;
      });

      this.repo.getToDoItems();
    }

    ngOnDestroy() {
        this.todoitemsListChanged.unsubscribe();
    }
}
