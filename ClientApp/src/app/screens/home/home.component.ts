import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { formatDate } from '@angular/common';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';
import { Repository } from '../../services/repository';
import { ToDoItem } from 'src/app/models/todoitem.model';

@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [
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
    private todoitemChanged: Subscription = new Subscription();

    errorMessage = signal('');

    todoitemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      dueBy: new FormControl(null, Validators.required)
    });
    
    ngOnInit() {
      this.todoitemChanged = this.repo.todoitemChanged.subscribe((item) => {
        this.todoitemForm.reset();
      }); 
    
      this.errorsChanged = this.repo.errorsChanged.subscribe(message => {
        this.errorMessage.set(JSON.stringify(message));
      });
    }

    addToDoItem() {
        this.todoitem.title = this.todoitemForm.value.title!;
        this.todoitem.creationDate = new Date(formatDate(new Date(), 'dd/M/yyyy', 'en-AU'));
        this.todoitem.dueBy = new Date(formatDate(this.todoitemForm.value.dueBy!, 'dd/M/yyyy', 'en-AU'));
        this.todoitem.completedDate = null;
        this.todoitem.isCompleted = false;

        this.repo.createToDoItem(this.todoitem);
    }

     ngOnDestroy() {
        this.todoitemChanged.unsubscribe();
        this.errorsChanged.unsubscribe();
    }
}
