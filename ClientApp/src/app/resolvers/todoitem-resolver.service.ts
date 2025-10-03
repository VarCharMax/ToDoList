import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';

import { ToDoItem } from '../models/todoitem.model';
import { Injectable } from '@angular/core';
import { Repository } from '../modules/repository';

@Injectable()
export class ToDoItemResolver implements Resolve<ToDoItem> {
    private todoitemObservable: Observable<ToDoItem> = new Observable<ToDoItem>();
    private todoitemSub: Subscription = new Subscription();
    private todoitemId: number = 0;

    constructor(private repo: Repository) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ToDoItem> | Promise<ToDoItem> | ToDoItem {
        this.todoitemId = route.params['id'];

        this.todoitemObservable = new Observable(
            (observer: { next: (arg0: ToDoItem) => void; complete: () => void }) => {
                const that = this;

                this.todoitemSub = this.repo.todoitemChanged.subscribe((c) => {
                    observer.next(c);
                    observer.complete();
                });

                return {
                    unsubscribe() {
                        that.todoitemSub.unsubscribe();
                    },
                };
            }
        );

        this.repo.getToDoItem(this.todoitemId);

        return this.todoitemObservable;
    }
}
