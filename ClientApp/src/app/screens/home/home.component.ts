import { Component, inject } from '@angular/core';
import {FormControl, FormGroup, ReactiveFormsModule} from '@angular/forms';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';
import { Repository } from '../../services/repository';
import { ToDoItem } from 'src/app/models/todoitem.model';
@Component({
  selector: 'app-home', 
  standalone: true,
  imports: [TodoItemsList,ReactiveFormsModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    private repo: Repository = inject(Repository);
    private todoitem: ToDoItem = new ToDoItem();
    todoitemForm = new FormGroup({
      title: new FormControl(''),
      completeBy: new FormControl('')
    });

    addToDoItem() {
        this.todoitem.title = this.todoitemForm.value.title ?? '';
        this.todoitem.creationDate = new Date();
        this.todoitem.completeBy =  null;
        this.repo.createToDoItem(this.todoitem);
        this.repo.getToDoItems();
    }
}
