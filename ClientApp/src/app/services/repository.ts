import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { TodoItemInfo } from '../models/todo-item';
import { ToDoItem } from '../models/todoitem.model';
import { Filter } from '../modules/configClasses.repository';
import { formatDate } from '@angular/common';

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
            
            // since SQLite stores dates as strings, rehydrate dates.
            t.forEach(i =>{
                if (i.completedDate) i.completedDate = new Date(formatDate(i.completedDate!, 'dd/M/yyyy', 'en-AU'))
                if (i.dueBy) i.dueBy = new Date(formatDate(i.dueBy!, 'dd/M/yyyy', 'en-AU'));
                if (i.creationDate) i.creationDate = new Date(formatDate(i.creationDate!, 'dd/M/yyyy', 'en-AU'))
            })

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
        this.http.get<TodoItemInfo>(`${itemsUrl}/${id}`).subscribe((i) => {

            if (i.completedDate) i.completedDate = new Date(formatDate(i.completedDate!, 'dd/M/yyyy', 'en-AU'))
            if (i.dueBy) i.dueBy = new Date(formatDate(i.dueBy!, 'dd/M/yyyy', 'en-AU'));
            if (i.creationDate) i.creationDate = new Date(formatDate(i.creationDate!, 'dd/M/yyyy', 'en-AU'))

            this.todoitemChanged.next(i);
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: TodoItemInfo) {
        this.http.post<ToDoItem>(itemsUrl, todoitem).subscribe({
            next:(item) => {

                if (item.completedDate) item.completedDate = new Date(formatDate(item.completedDate!, 'dd/M/yyyy', 'en-AU'));
                if (item.dueBy) item.dueBy = new Date(formatDate(item.dueBy!, 'dd/M/yyyy', 'en-AU'));
                if (item.creationDate) item.creationDate = new Date(formatDate(item.creationDate!, 'dd/M/yyyy', 'en-AU'));

                this.todoitem = item
                this.todoitemChanged.next(item);
                this.todoitems.push(item);

                /*
                this.todoitems
                    .sort((a, b) => b.creationDate!.getTime() - a.creationDate!.getTime()!) //Descending
                    .sort((a, b) => b.dueBy!.getTime() - a.dueBy!.getTime()) //Descending
                    .sort((a, b) => { if (a.isCompleted! && !b.isCompleted!) { return 1; } 
                        else if (!a.isCompleted! && b.isCompleted!) { return -1; } 
                        else {return 0; }}); //Ascending
                */
                
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

                        if (t.completedDate) t.completedDate = new Date(formatDate(t.completedDate!, 'dd/M/yyyy', 'en-AU'));
                        if (t.dueBy) t.dueBy = new Date(formatDate(t.dueBy!, 'dd/M/yyyy', 'en-AU'));
                        if (t.creationDate) t.creationDate = new Date(formatDate(t.creationDate!, 'dd/M/yyyy', 'en-AU'));

                        this.todoitems[index] = t;
                        this.todoitems = this.todoitems.DBSort();
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
