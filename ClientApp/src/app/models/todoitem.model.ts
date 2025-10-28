import { ToDoItemInfo } from './todo-item';

export class ToDoItem implements ToDoItemInfo {
    constructor(
            public id?: number,
            public title?: string,
            public creationDate?: Date,
            public dueBy?: Date,
            public completedDate?: Date | null,
            public isCompleted?: boolean
        )
    { 
        // Fix date if date is ISO string.
        if (this.creationDate && (typeof this.creationDate === 'string')) this.creationDate = new Date(this.creationDate!);
        if (this.dueBy && (typeof this.dueBy === 'string')) this.dueBy = new Date(this.dueBy!);
        if (this.completedDate && (typeof this.completedDate === 'string')) this.completedDate = new Date(this.completedDate!);
    }

    get isOverdue(): boolean {
        return !this.isCompleted && (this.dueBy! < new Date());;
    }
}
