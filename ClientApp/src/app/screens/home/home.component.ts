import { Component } from '@angular/core';
import { TodoItemsList} from '../../components/todo-items-list/todo-items-list';

@Component({
  selector: 'app-home',
  imports: [TodoItemsList],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    
}
