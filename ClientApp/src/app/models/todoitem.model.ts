import { formatDate } from '@angular/common';
import { ToDoItemInfo }  from './todo-item';

export class ToDoItem implements ToDoItemInfo {
    constructor(
        public id?: number,
        public title?: string,
        public creationDate?: Date,
        public completedDate?: Date | null,
        public dueBy?: Date | null,
        public isCompleted?: boolean,
        public isOverdue?: boolean,
        ) { }
    RehydrateDates()
    {
        if (this.completedDate) this.completedDate = new Date(formatDate(this.completedDate!, 'dd/M/yyyy', 'en-AU'));
        if (this.dueBy) this.dueBy = new Date(formatDate(this.dueBy!, 'dd/M/yyyy', 'en-AU'));
        if (this.creationDate) this.creationDate = new Date(formatDate(this.creationDate!, 'dd/M/yyyy', 'en-AU'));
        return this;
    }
}
