import { Subject } from 'rxjs';
import { TodoItemInfo } from '../models/todo-item';
import { Filter } from '../modules/configClasses.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDoItem } from '../models/todoitem.model';

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
            console.log('Retrieved todoitems: ' + JSON.stringify(t));
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
            this.todoitemChanged.next(JSON.parse(JSON.stringify(p)));
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: TodoItemInfo) {
        /*
        let data = {
            title: todoitem.title,
            creationDate: todoitem.creationDate,
            dueBy: todoitem.dueBy,
            completedDate: null,
            isCompleted: false,
        };
        */

        this.http.post<number>(itemsUrl, todoitem).subscribe({
            next:(id) => {
                todoitem.id = id;
                this.todoitems.push(todoitem);
                this.todoitemsChanged.next(this.todoitems.slice());
            },
            error: (e) => {
                console.log('Error! ' + e);
                this.errorsChanged.next(e.error?.errors);
            }
        });
    }
 
    /*
    * Replace Entity
    */
    replaceToDoItem(todoitem: TodoItemInfo) {
        /*
        let data = {
            title: todoitem.title,
            creationDate: todoitem.creationDate,
            completedDate: todoitem.completedDate,
            isCompleted: todoitem.isCompleted
        };
        */
        console.log('Replace item: ' + JSON.stringify(todoitem));
        this.http
            .put(`${itemsUrl}/${todoitem.id}`, todoitem)
                .subscribe({next:(t) => {
                console.log("Result from put:" + t);
                let index = this.todoitems.findIndex((t) => t.id === todoitem.id);
                if (index !== -1) {
                    this.todoitems[index] = t;
                    this.todoitemChanged.next(JSON.parse(JSON.stringify(t)));
                }
            },
            error:(e) => {
                console.log('Error! ' + e);
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
        this.http.delete(`${itemsUrl}/${id}`).subscribe((result) => {
            console.log("Result from delete:" + result);
            if (result === true) {
                this.todoitems = this.todoitems.filter((p) => p.id != id);
                this.todoitemsChanged.next(this.todoitems.slice());
            }
        });
    }
}
