import { ActivatedRoute, Data, Router } from '@angular/router';
import { Component, OnDestroy, OnInit } from '@angular/core';

import { ToDoItem } from '../../models/todoitem.model';
import { Repository } from '../../modules/repository';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
    private todoitemsListSub: Subscription = new Subscription();


    todoitems: ToDoItem[] = [];

    constructor(private repo: Repository, private router: Router, private route: ActivatedRoute) { }                     

    ngOnInit() {
        
        this.todoitemsListSub = this.route.data
            .subscribe(
                (data: Data) => {
                    this.todoitems = data['todoitems'];
                }
        );
    }

    ngOnDestroy() {
        this.todoitemsListSub.unsubscribe();
    }
}
