import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { NgIf } from '@angular/common';
import { formatDate } from '@angular/common';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';
import { Repository } from '../../services/repository';
import { ToDoItem } from 'src/app/models/todoitem.model';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [
    NgIf, // Material modules don't seem to work with new control flow syntax yet.
    TodoItemsList,
    ReactiveFormsModule, 
    MatDatepickerModule,
    MatInputModule,
    MatNativeDateModule
  ],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit, OnDestroy {
    private repo: Repository = inject(Repository);
    private todoitem: ToDoItem = new ToDoItem();
    private errorsChanged: Subscription = new Subscription();

    errorMessage = signal('');

    todoitemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      dueBy: new FormControl(null, Validators.required)
    });
    
    ngOnInit() {
      this.errorsChanged = this.repo.errorsChanged.subscribe(message => {
        console.log('Received errors: ' + JSON.stringify(message));
        this.errorMessage.set(JSON.stringify(message));
      });
    }

    addToDoItem() {
        this.todoitem.title = this.todoitemForm.value.title!;
        this.todoitem.creationDate = new Date(formatDate(new Date(), 'd/M/yyyy', 'en-AU'));
        this.todoitem.dueBy = new Date(formatDate(this.todoitemForm.value.dueBy!, 'd/M/yyyy', 'en-AU'));
        this.todoitem.completedDate = null;
        this.todoitem.isCompleted = false;

        this.repo.createToDoItem(this.todoitem);
        this.todoitemForm.reset(); //TODO: check if successful before reseting. Will need to subscribe to the result of createToDoItem.
    }

     ngOnDestroy() {
        this.errorsChanged.unsubscribe();
    }
}
