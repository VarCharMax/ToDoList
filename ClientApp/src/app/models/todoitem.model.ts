import { TodoItemInfo}  from './todo-item';

export class ToDoItem implements TodoItemInfo {
    constructor(
        public id?: number,
        public title?: string,
        public creationDate?: Date,
        public completedDate?: Date | null,
        public dueBy?: Date | null,
        public isCompleted?: boolean
        ) { }
}
