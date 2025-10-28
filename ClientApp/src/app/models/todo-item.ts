export interface ToDoItemInfo {
    id?: number,
    title?: string,
    creationDate?: Date,
    dueBy?: Date,
    completedDate?: Date | null,
    isCompleted?: boolean,
    isOverdue: boolean
}
