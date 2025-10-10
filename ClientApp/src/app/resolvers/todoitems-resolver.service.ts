import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { Injectable, OnDestroy } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { ToDoItemInfo } from '../models/todo-item';
import { Repository } from '../services/repository';

@Injectable()
export class ToDoItemsResolver implements Resolve<ToDoItemInfo[]>, OnDestroy {
    private todoitemsObservable: Observable<ToDoItemInfo[]> = new Observable<ToDoItemInfo[]>();
    private todoitemsSub: Subscription = new Subscription;

    constructor(private repo: Repository) {

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<ToDoItemInfo[]> | Promise<ToDoItemInfo[]> | ToDoItemInfo[] {

        this.todoitemsObservable = new Observable((observer: { next: (arg0: ToDoItemInfo[]) => void; complete: () => void; }) => {

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
        

    }

}
