export interface ToDoItemInfo {
    id?: number,
    title?: string,
    creationDate?: Date,
    completedDate?: Date | null,
    dueBy?: Date | null,
    isCompleted?: boolean,
    isOverdue?: boolean,
    RehydrateDates(): this
}
