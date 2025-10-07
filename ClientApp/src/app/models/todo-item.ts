export interface TodoItemInfo {
    id?: number,
    title?: string,
    creationDate?: Date,
    completedDate?: Date | null,
    dueBy?: Date | null,
    isCompleted?: boolean
}
