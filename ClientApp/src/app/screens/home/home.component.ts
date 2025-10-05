import { Component } from '@angular/core';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  imports: [TodoItemsList]
})
export class HomeComponent {
    
}
