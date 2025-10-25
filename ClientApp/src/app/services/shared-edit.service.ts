import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SharedItemEditService {
    private itemlistEventSource = new Subject<number>();
    private itemEventSource = new Subject<number>();
    private resetErrorsEventSource = new Subject<void>();

    itemlistEditEvent$ = this.itemlistEventSource.asObservable();
    itemEditEvent$ = this.itemEventSource.asObservable();
    resetErrorsEvent$ = this.resetErrorsEventSource.asObservable();

    emitListEvent(message: number) {
        this.itemlistEventSource.next(message);
    }

    emitItemEvent(message: number) {
        this.itemEventSource.next(message);
    }

    emitErrorsResetEvent() {
        this.resetErrorsEventSource.next();
    }
}