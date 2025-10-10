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
        if (this.completedDate) this.completedDate = new Date(this.completedDate!);
        if (this.dueBy) this.dueBy = new Date(this.dueBy!);
        if (this.creationDate) this.creationDate = new Date(this.creationDate!);
        return this;
    }
}
