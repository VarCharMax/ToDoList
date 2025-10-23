import { Component, inject, OnDestroy, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import { formatDate } from '@angular/common';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';
import { MatNativeDateModule } from '@angular/material/core';
import { Subscription } from 'rxjs';
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
    private errorsChanged: Subscription = new Subscription();
    private todoitemListChanged: Subscription = new Subscription();  
    private repo: Repository = inject(Repository);
    private todoitem: ToDoItem = new ToDoItem();

    errorMessage = signal('');

    todoitemForm = new FormGroup({
      title: new FormControl(null, Validators.required),
      dueBy: new FormControl(null, Validators.required)
    });
    
    ngOnInit() {
      this.todoitemListChanged = this.repo.todoitemsChanged.subscribe((item) => {
        this.todoitemForm.reset();
      }); 
    
      this.errorsChanged = this.repo.errorsChanged.subscribe(message => {
        
        let err = '';
        Object.keys(message).forEach(key => {
          if (key !== '') {
            err += `${message[key].join(' ')} \n`;
            } 
          });

        this.errorMessage.set(err);
      });
    }

    addToDoItem() {
      this.todoitem = new ToDoItem(
        undefined,
        this.todoitemForm.value.title!,
        new Date(),
        this.todoitemForm.value.dueBy!,
        null,
        false
      );

      this.repo.createToDoItem(this.todoitem);
    }

     ngOnDestroy() {
        this.todoitemListChanged.unsubscribe();
        this.errorsChanged.unsubscribe();
    }
}
