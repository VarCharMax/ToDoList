import { Subject } from 'rxjs';
import { TodoItemInfo } from '../models/todo-item';
import { Filter } from '../modules/configClasses.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TodoItem } from '../components/todo-item/todo-item';

const itemsUrl = 'api/items';

@Injectable()
export class Repository {
    
    todoitems: TodoItemInfo[] = [];
    todoitem: TodoItem = new TodoItem();

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
        this.http.get<TodoItemInfo[]>(itemsUrl).subscribe((p) => {
            this.todoitems = p.slice();
            this.todoitemsChanged.next(p.slice());
    });
    }

/*
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
        let data = {
            title: todoitem.title,
            creationDate: todoitem.creationDate,
            completedDate: null,
            isCompleted: false,
        };

        this.http.post<number>(itemsUrl, data).subscribe({
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
    * Get entity
    */
    getoDoItem(id: number) {
        this.http.get<TodoItemInfo>(`${itemsUrl}/${id}`).subscribe((p) => {
            this.todoitemsChanged.next(JSON.parse(JSON.stringify(p)));
        });
    }
 
    /*
    * Replace Entity
    */
    replaceClinician(todoitem: TodoItemInfo) {
        let data = {
            title: todoitem.title,
            creationDate: todoitem.creationDate,
            completedDate: todoitem.completedDate,
            isCompleted: todoitem.isCompleted
        };

        this.http
            .put(`${itemsUrl}/${todoitem.id}`, data)
        .subscribe(() => this.getToDoItems());
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
}
