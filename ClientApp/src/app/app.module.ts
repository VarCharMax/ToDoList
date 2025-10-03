import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from './modules/model.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToDoItemResolver } from './resolvers/todoitem-resolver.service';
import { ToDoItemsResolver } from './resolvers/todoitems-resolver.service';
import { environment } from './environments/environment';

export const MY_DATE_FORMATS = {
    parse: {
        dateInput: 'DD/MM/YYYY',
    },
    display: {
        dateInput: 'DD/MM/YYYY',
        monthYearLabel: 'MMMM YYYY',
        dateA11yLabel: 'LL',
        monthYearA11yLabel: 'MMMM YYYY'
    },
};

@NgModule({
  declarations: [
    AppComponent
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        ModelModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
    ],
    providers: [
        ToDoItemResolver,
        ToDoItemsResolver
    { provide: "BASE_API_URL", useValue: environment.apiUrl },],
    bootstrap: [AppComponent]
})
export class AppModule { }
