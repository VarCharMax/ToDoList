
export class ToDoItem {
    constructor(
        public id?: number,
        public title?: string,
        public creationDate?: Date,
        public completedDate?: Date,
        public isCompleted?: boolean
        ) { }
}