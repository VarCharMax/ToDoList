import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ToDoItemInfo } from '../models/todo-item';
import { ToDoItem } from '../models/todoitem.model';
import { Filter } from '../modules/configClasses.repository';
import { formatDate } from '@angular/common';

const itemsUrl = 'api/items';

@Injectable({
        providedIn: 'root'
    }
)
export class Repository {
    
    todoitems: ToDoItemInfo[] = [];
    todoitem: ToDoItem = new ToDoItem();

    todoitemsChanged: Subject<ToDoItemInfo[]> = new Subject<ToDoItemInfo[]>();
    todoitemChanged: Subject<ToDoItemInfo> = new Subject<ToDoItemInfo>();
    errorsChanged: Subject<{ [label: string]: Array<string> }> = new Subject<{
        [label: string]: Array<string>;
    }>();

    filter: Filter = new Filter();

    constructor(private http: HttpClient) {}

    /*
    * Get collections
    */
    getToDoItems() {
        this.http.get<ToDoItemInfo[]>(itemsUrl).subscribe((t) => {
            
            this.todoitems = [];

            t.forEach(item =>{
                let newItem: ToDoItem = new ToDoItem(
                    item.id, 
                    item.title, 
                    item.creationDate, 
                    item.completedDate, 
                    item.dueBy, 
                    item.isCompleted, 
                    false);
                
                // since SQLite stores dates as strings, rehydrate dates.
                newItem.RehydrateDates();
                this.todoitems.push(newItem);
            });
            
            this.todoitemsChanged.next(this.todoitems.slice());
        });
    }

/*
    This is an example of how to implement filtering on the server side using a query string.
    getToDoItems() {
        let url = `${itemsUrl}?related=${this.filter.related}`;

    if (this.filter.search) {
        url += `&search=true&${this.filter.search}`;
    }

        this.http.get<TodoItemInfo[]>(url).subscribe((p) => {
            this.todoitems = p.slice();
            this.todoitemsChanged.next(p.slice());
    });
*/

    /*
    * Get entity
    */
    getToDoItem(id: number) {
        this.http.get<ToDoItemInfo>(`${itemsUrl}/${id}`).subscribe((i) => {

            let newItem: ToDoItem = new ToDoItem(i.id, 
                    i.title, 
                    i.creationDate, 
                    i.completedDate, 
                    i.dueBy, 
                    i.isCompleted, 
                    false);

            i.RehydrateDates();

            this.todoitemChanged.next(i);
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: ToDoItemInfo) {
        this.http.post<ToDoItem>(itemsUrl, todoitem).subscribe({
            next:(item) => {

                let newItem: ToDoItem = new ToDoItem(item.id, 
                    item.title, 
                    item.creationDate, 
                    item.completedDate, 
                    item.dueBy, 
                    item.isCompleted, 
                    false);

                // Fix issue wiht SQLIte DB storing dates as strings.
                newItem.RehydrateDates();

                this.todoitem = newItem
                this.todoitemChanged.next(newItem);
                this.todoitems.push(newItem);
                
                // Sort list according to match DB sort rules.
                this.todoitems = this.todoitems.DBSort();
                this.todoitemsChanged.next(this.todoitems.slice());
            },
            error: (e) => {
                this.errorsChanged.next(e.error?.errors);
            }
        });
    }
 
    /*
    * Replace Entity
    */
    replaceToDoItem(todoitem: ToDoItem) {
        this.http
            .put<ToDoItem>(`${itemsUrl}/${todoitem.id}`, todoitem)
                .subscribe({next:(t) => {
                    let index = this.todoitems.findIndex((t) => t.id === todoitem.id);
                    if (index !== -1) {

                        let updateItem: ToDoItem = new ToDoItem(t.id, t.title, t.creationDate, t.completedDate, t.dueBy, t.isCompleted, false);

                        updateItem.RehydrateDates();

                        this.todoitems[index] = updateItem;
                        this.todoitems = this.todoitems.DBSort();
                        this.todoitemChanged.next(updateItem);
                    }
                },
                error:(e) => {
                    this.errorsChanged.next(e.error?.errors);
            }
        });
    }

    /*
    * Update entity
    */
    updateContent(id: number, changes: Map<string, any>) {
        let patch: { op: string; path: string; value: any }[] = [];
        changes.forEach((value, key) =>
            patch.push({ op: 'replace', path: key, value: value })
        );
        this.http.patch(`${itemsUrl}/${id}`, patch).subscribe(() => this.getToDoItem(id));
    }

    deleteToDoItem(id: number) {
        this.http.delete<boolean>(`${itemsUrl}/${id}`).subscribe({next: (result) => {
                if (result === true) {
                    this.todoitems = this.todoitems.filter((p) => p.id != id);
                    this.todoitemsChanged.next(this.todoitems.slice());
                }
            },
            error: (e) => {
                this.errorsChanged.next(e.error?.errors);
            }
        });
    }
}
