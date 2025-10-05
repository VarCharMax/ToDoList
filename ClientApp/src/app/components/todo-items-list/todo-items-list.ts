import { ActivatedRoute, Data, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';
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
    todoitemList: TodoItemInfo[] = [];

    constructor(private repo: Repository) { }                     

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
