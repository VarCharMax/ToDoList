import { ToDoItem } from "../models/todoitem.model";

if (!Array.prototype.DBSort) {
        Array.prototype.DBSort = function<T extends { dueBy: Date }>(this: ToDoItem[]): ToDoItem[] {
             return this
                .sort((a, b) => b.creationDate!.getTime() - a.creationDate!.getTime()!) //Descending
                .sort((a, b) => b.dueBy!.getTime() - a.dueBy!.getTime()) //Descending
                .sort((a, b) => { if (a.isCompleted! && !b.isCompleted!) { return 1; } 
                    else if (!a.isCompleted! && b.isCompleted!) { return -1; } //Ascending
                    else {return 0; }}); //Preserve order
        };
    }