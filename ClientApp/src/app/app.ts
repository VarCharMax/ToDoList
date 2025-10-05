import { Component, signal } from '@angular/core';
import { HomeComponent } from "./screens/home/home.component";
// import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  // imports: [RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [HomeComponent]
})
export class App {
  protected readonly title = signal('todo-list-app');
}
