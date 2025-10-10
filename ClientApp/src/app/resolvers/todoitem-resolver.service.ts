import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Observable, Subscription } from 'rxjs';
import { ToDoItemInfo } from '../models/todo-item';
import { Injectable } from '@angular/core';
import { Repository } from '../services/repository';

@Injectable()
export class ToDoItemResolver implements Resolve<ToDoItemInfo> {
    private todoitemObservable: Observable<ToDoItemInfo> = new Observable<ToDoItemInfo>();
    private todoitemSub: Subscription = new Subscription();
    private todoitemId: number = 0;

    constructor(private repo: Repository) { }

    resolve(
        route: ActivatedRouteSnapshot,
        state: RouterStateSnapshot
    ): Observable<ToDoItemInfo> | Promise<ToDoItemInfo> | ToDoItemInfo {
        this.todoitemId = route.params['id'];

        this.todoitemObservable = new Observable(
            (observer: { next: (arg0: ToDoItemInfo) => void; complete: () => void }) => {
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
