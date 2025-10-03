import { Subject } from 'rxjs';
import { ToDoItem } from '../models/todoitem.model';
// import { Filter } from './configClasses.repository';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const itemsUrl = 'api/items';

@Injectable()
export class Repository {
    private todoitems: ToDoItem[] = [];

    todoitemsChanged: Subject<ToDoItem[]> = new Subject<ToDoItem[]>();
    todoitemChanged: Subject<ToDoItem> = new Subject<ToDoItem>();
    errorsChanged: Subject<{ [label: string]: Array<string> }> = new Subject<{
        [label: string]: Array<string>;
    }>();

    // filter: Filter = new Filter();

    constructor(private http: HttpClient) {}

    /*
    * Get collections
    */
    getToDoItems() {
        this.http.get<ToDoItem[]>(itemsUrl).subscribe((p) => {
            this.todoitems = p.slice();
            this.todoitemsChanged.next(p.slice());
    });
    }

    /*
    getPatients() {
        let url = `${itemsUrl}?related=${this.filter.related}`;

    if (this.filter.search) {
        url += `&search=true&${this.filter.search}`;
    }

        this.http.get<ToDoItem[]>(url).subscribe((p) => {
            this.todoitems = p.slice();
            this.todoitemsChanged.next(p.slice());
    });
    */

    /*
    * Get entity
    */
    getToDoItem(id: number) {
        this.http.get<ToDoItem>(`${itemsUrl}/${id}`).subscribe((p) => {
            this.todoitemChanged.next(JSON.parse(JSON.stringify(p)));
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: ToDoItem) {
        let data = {
            title: todoitem.title,
            creationDate: todoitem.creationDate,
            completedDate: null,
            isCompleted: false,
        };

        this.http.post<number>(itemsUrl, data).subscribe(
            (id) => {
                todoitem.id = id;
                this.todoitems.push(todoitem);
                this.todoitemsChanged.next(this.todoitems.slice());
            },
            (e) => {
                console.log('Error! ' + e);
                this.errorsChanged.next(e.error?.errors);
            }
        );
    }

    /*
    * Get entity
    */
    getoDoItem(id: number) {
        this.http.get<ToDoItem>(`${itemsUrl}/${id}`).subscribe((p) => {
            this.todoitemsChanged.next(JSON.parse(JSON.stringify(p)));
        });
    }
 
    /*
    * Replace Entity
    */
    replaceClinician(todoitem: ToDoItem) {
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
