import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TodoItemInfo } from '../models/todo-item';
import { ToDoItem } from '../models/todoitem.model';
import { Filter } from '../modules/configClasses.repository';

const itemsUrl = 'api/items';

@Injectable({
        providedIn: 'root'
    }
)
export class Repository {
    
    todoitems: TodoItemInfo[] = [];
    todoitem: ToDoItem = new ToDoItem();

    todoitemsChanged: Subject<TodoItemInfo[]> = new Subject<TodoItemInfo[]>();
    todoitemChanged: Subject<TodoItemInfo> = new Subject<TodoItemInfo>();
    errorsChanged: Subject<{ [label: string]: Array<string> }> = new Subject<{
        [label: string]: Array<string>;
    }>();

    filter: Filter = new Filter();

    constructor(private http: HttpClient) {}

    /*
    * Get collections
    */
    getToDoItems() {
        this.http.get<TodoItemInfo[]>(itemsUrl).subscribe((t) => {
            this.todoitems = t.slice();
            this.todoitemsChanged.next(t.slice());
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
        this.http.get<TodoItemInfo>(`${itemsUrl}/${id}`).subscribe((p) => {
            this.todoitemChanged.next(p);
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: TodoItemInfo) {

        this.http.post<ToDoItem>(itemsUrl, todoitem).subscribe({
            next:(item) => {
                // todoitem.id = id;
                console.log("Created item: " + JSON.stringify(item));
                this.todoitems.push(item);
                this.todoitemsChanged.next(this.todoitems.slice());
                this.todoitemChanged.next(item);
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
                        console.log("Updated item: " + JSON.stringify(t));
                        this.todoitems[index] = t;
                        this.todoitemChanged.next(t);
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
