import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';

import { ToDoItem } from '../models/todoitem.model';
import { Repository } from '../modules/repository';

@Injectable()
export class ToDoItemsResolver implements Resolve<ToDoItem[]>, OnDestroy {
    private todoitemsObservable: Observable<ToDoItem[]> = new Observable<ToDoItem[]>();
    private todoitemsSub: Subscription = new Subscription;

    constructor(private repo: Repository) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDoItem[]> | Promise<ToDoItem[]> | ToDoItem[] {

        this.todoitemsObservable = new Observable((observer: { next: (arg0: ToDoItem[]) => void; complete: () => void; }) => {

            const that = this;

            this.todoitemsSub = this.repo.todoitemsChanged.subscribe(c => {
                observer.next(c);
                observer.complete();
            });

            return {
                unsubscribe() {
                    that.todoitemsSub.unsubscribe();
                }
            };

        });

        this.repo.getToDoItems();

        return this.todoitemsObservable;
    }

    ngOnDestroy() {
        console.log('In OnDestroy');

    }

}
