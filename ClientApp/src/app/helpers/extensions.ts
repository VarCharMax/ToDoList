import { ToDoItem } from "../models/todoitem.model";

/*This is to mirror the sort order returned from the database whenever an item is added or updated on the client.
* Stable sort:
* Will sort by title, then due date.
* Overdue items will appear at top, completed at bottom.
*/
if (!Array.prototype.DBSort) {
    Array.prototype.DBSort = function<T extends { dueBy: Date }>(this: ToDoItem[]): ToDoItem[] {
        return this.sort((a, b) => 
                a.title!.toLowerCase().localeCompare(b.title!.toLowerCase(), 'en', { sensitivity: 'base' }) )
                .sort((a, b) => a.dueBy!.getTime() - b.dueBy!.getTime())
                .sort((a, b) => (Number(a.isCompleted!) - Number(b.isCompleted!)))
                .sort((a, b) => (Number(b.isOverdue!) - Number(a.isOverdue!)));
    }
}

/* Removes the time component from a Date object, returning a new Date with time set to 00:00:00 */
if (!Date.prototype.removeTimeFromDate) {
    Date.prototype.removeTimeFromDate = function(this: Date): Date {
        // HACK: the `useutc` parameter of the datepicker should ensure that the date is already in UTC, but for some reason isn't.
        // So we use this workaround.
        return new Date(Date.UTC(this.getFullYear(), this.getMonth(), this.getDate()));
    }
}
