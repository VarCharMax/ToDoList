import { Component } from '@angular/core';
import { HomeComponent } from './screens/home/home.component';

@Component({
    selector: 'app-root',
    imports: [HomeComponent],
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
    
})
export class AppComponent {
  title = 'ToDo List';
}
