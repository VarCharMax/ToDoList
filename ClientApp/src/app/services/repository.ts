import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject } from 'rxjs';
import { ToDoItemInfo } from '../models/todo-item';
import { ToDoItem } from '../models/todoitem.model';
import { Filter } from '../modules/configClasses.repository';

const itemsUrl = 'api/items';

@Injectable({
        providedIn: 'root'
    }
)
export class Repository {
    private todoitems: ToDoItemInfo[] = [];
    private todoitem: ToDoItem = new ToDoItem();

    /*
    * todoitemsChanged - called when list is added to or subtracted from.
    * todoitemChanged - called when item changes state.
    * todoitemChanged does not get called when item is created.
    * No method should call both events, as this this will lead to edit-warring over item.
    */

    todoitemsChanged: Subject<ToDoItemInfo[]> = new Subject<ToDoItemInfo[]>();
    todoitemChanged: Subject<ToDoItemInfo> = new Subject<ToDoItemInfo>();
    todoitemRetrieved: Subject<ToDoItemInfo> = new Subject<ToDoItemInfo>();
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
            
            //Clear array.
            this.todoitems = [];

            t.forEach(item =>{
                let newItem: ToDoItem = new ToDoItem(
                    item.id, 
                    item.title, 
                    item.creationDate, 
                    item.dueBy, 
                    item.completedDate,
                    item.isCompleted
                );

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

            this.todoitem = new ToDoItem(
                    i.id, 
                    i.title, 
                    i.creationDate, 
                    i.dueBy,
                    i.completedDate, 
                    i.isCompleted
                );
            
            this.todoitemRetrieved.next(this.todoitem);
        });
    }

    /*
    * Add entity
    */
    createToDoItem(todoitem: ToDoItemInfo) {
        this.http.post<number>(itemsUrl, todoitem).subscribe({
            next:(id) => {

                let newItem: ToDoItem = new ToDoItem(
                    id, 
                    todoitem.title, 
                    todoitem.creationDate,
                    todoitem.dueBy, 
                    todoitem.completedDate,
                    todoitem.isCompleted);

                //Don't call change event on new item.
                this.todoitem = newItem
                this.todoitems.push(newItem);

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
    replaceToDoItem(todoItem: ToDoItemInfo) {
        this.http
            .put<boolean>(`${itemsUrl}/${todoItem.id}`, todoItem)
                .subscribe({next:(result) => {
                    if (result == true) {

                        let index = this.todoitems.findIndex((t) => t.id === todoItem.id);

                        if (index !== -1)
                        {
                            let updateItem: ToDoItem = new ToDoItem(
                                todoItem.id, 
                                todoItem.title, 
                                todoItem.creationDate, 
                                todoItem.dueBy, 
                                todoItem.completedDate,
                                todoItem.isCompleted
                            );

                            this.todoitems[index] = updateItem;
                            
                            this.todoitemChanged.next(updateItem);
                        } else
                        {
                            this.errorsChanged.next({errors: ["Update operation encountered an error"]});
                        }
                        
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
                    this.todoitems = this.todoitems.filter((i) => i.id != id).slice();
                    this.todoitemsChanged.next(this.todoitems.slice());
                }
            },
            error: (e) => {
                this.errorsChanged.next(e.error?.errors);
            }
        });
    }
}
